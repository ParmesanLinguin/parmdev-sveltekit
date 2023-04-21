import type { SvelteComponent } from "svelte";
import { quintOut } from 'svelte/easing';
import { cubicOut, cubicInOut, linear } from 'svelte/easing';
import { assign, split_css_unit, is_function } from 'svelte/internal';

export const crossfade = cf({
  duration: d => Math.sqrt(d * 400),

  fallback(node, params) {
    const style = getComputedStyle(node);
    const transform = style.transform === 'none' ? '' : style.transform;

    return {
      duration: 600,
      easing: quintOut,
      css: t => `
        transform: ${transform} scale(${t});
        opacity: ${t}
      `
    };
  }});

  export type EasingFunction = (t: number) => number;

  export interface CrossfadeParams {
    delay?: number;
    duration?: number | ((len: number) => number);
    easing?: EasingFunction;
  }

  export interface TransitionConfig {
    delay?: number;
    duration?: number;
    easing?: EasingFunction;
    css?: (t: number, u: number) => string;
    tick?: (t: number, u: number) => void;
  }
  
  type ClientRectMap = Map<any, Element>;

  export function cf({ fallback, ...defaults }: CrossfadeParams & {
    fallback?: (node: Element, params: CrossfadeParams, intro: boolean) => TransitionConfig;
  }): [
    (
      node: Element,
      params: CrossfadeParams & {
        key: any;
      }
    ) => () => TransitionConfig,
    (
      node: Element,
      params: CrossfadeParams & {
        key: any;
      }
    ) => () => TransitionConfig
  ] {
    const to_receive: ClientRectMap = new Map();
    const to_send: ClientRectMap = new Map();
  
    function crossfade(from_node: Element, node: Element, params: CrossfadeParams): TransitionConfig {
      const {
        delay = 0,
        duration = (d: number) => Math.sqrt(d) * 30,
        easing = cubicOut
      } = assign(assign({}, defaults), params);
  
      const from = from_node.getBoundingClientRect();
      const to = node.getBoundingClientRect();
      const dx = from.left - to.left;
      const dy = from.top - to.top;
      const dw = from.width / to.width;
      const dh = from.height / to.height;
      const d = Math.sqrt(dx * dx + dy * dy);
  
      const style = getComputedStyle(node);
      const transform = style.transform === 'none' ? '' : style.transform;
      const opacity = +style.opacity;
  
      return {
        delay,
        duration: is_function(duration) ? duration(d) : duration,
        easing,
        css: (t, u) => `
          opacity: ${1};
          transform-origin: top left;
          transform: ${transform} translate(${u * dx}px,${u * dy}px) scale(${t + (1 - t) * dw}, ${t + (1 - t) * dh});
        `
      };
    }
  
    function transition(items: ClientRectMap, counterparts: ClientRectMap, intro: boolean) {
      return (node: Element, params: CrossfadeParams & { key: any }) => {
        items.set(params.key, node);
  
        return () => {
          if (counterparts.has(params.key)) {
            const other_node = counterparts.get(params.key)!;
            counterparts.delete(params.key);
  
            return crossfade(other_node, node, params);
          }
  
          // if the node is disappearing altogether
          // (i.e. wasn't claimed by the other list)
          // then we need to supply an outro
          items.delete(params.key);
          return (fallback && fallback(node, params, intro))!;
        };
      };
    }
  
    return [
      transition(to_send, to_receive, false),
      transition(to_receive, to_send, true)
    ];
  }
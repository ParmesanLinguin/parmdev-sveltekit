<script lang="ts">
  import { fade } from "svelte/transition";
  import { navigating } from "$app/stores";
  import { onMount } from "svelte";

  let mobile: boolean = false;
  let hidden: boolean = true;
  let width: number = 0;

  export let solidBackground: boolean = false;
  export let showTitle: boolean;
  export let links: { name: string, link: string }[];

  function expand() {
    hidden = !hidden;
  }

  function resize() {
    width = window.innerWidth;
    if (width < 640) { mobile = true; }
    if (width >= 640) { mobile = false; hidden = true; }
  }

  onMount(() => resize());

  $: if ($navigating) { hidden = true; }

</script>

<svelte:window on:resize={() => resize()} on:pageshow />

<div class="fixed top-0 z-50 drop-shadow-xl transition-colors duration-300 ease-in w-screen m-auto {
  solidBackground || mobile && !hidden ? "bg-white dark:!bg-[#01060f] bg-opacity-70 dark:!bg-opacity-70 [backdrop-filter:blur(10px)]" : "!bg-transparent dark:!bg-transparent"}">
  <div class="mx-auto max-w-[1600px] w-screen px-4">
    <div class="flex flex-row justify-end items-center h-16">
      {#if showTitle || mobile && !hidden}
        <slot name="title" />
      {/if}
      {#if !mobile}
        <div class="flex flex-row">
          {#each links as link}
          <a href="{link.link}"><p class="font-libre-franklin px-4 text-lg !text-black dark:!text-white hover:!text-blue-800 dark:hover:!text-blue-200">{link.name}</p></a>
          {/each}
        </div>
      {:else}
        <button on:click={() => expand()} aria-expanded="{hidden}" tabindex="0"><img class="w-8 h-8 dark:[filter:invert(1)] cursor-pointer" alt="" src="/hamburger.svg"/></button>
      {/if}
    </div>
    {#if !hidden}
      <div class="flex flex-col" transition:fade>
        {#each links as link}
          <a href="{link.link}"><p class="pb-2 font-libre-franklin text-lg !text-black dark:!text-white hover:!text-blue-800 dark:hover:!text-blue-200">{link.name}</p></a>
          {/each}
      </div>
    {/if}
  </div>
</div>
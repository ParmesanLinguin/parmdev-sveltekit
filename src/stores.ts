import type { SvelteComponent } from "svelte";
import { writable } from "svelte/store";

export const scroll = writable(0);
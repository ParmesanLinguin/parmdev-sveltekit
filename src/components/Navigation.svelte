<script>
  import { fade } from "svelte/transition";
  import Navbar from "./Navbar.svelte";

  export let showTitle = true;
  export let solidBackground = true;
</script>

<Navbar class="fixed top-0 z-50 drop-shadow-xl transition-colors duration-300 ease-in {
  solidBackground ? "bg-white dark:!bg-[#01060f] bg-opacity-70 dark:!bg-opacity-70 [backdrop-filter:blur(10px)]" : "!bg-transparent dark:!bg-transparent"}">
  <a href="/" class="mr-auto">
    {#if showTitle}
      <span class="self-start block whitespace-nowrap h-auto text-2xl font-bold font-libre-franklin !text-black dark:!text-white hover:!text-blue-800 dark:hover:!text-blue-200" transition:fade|local>
        Parmesan Linguine
      </span>
    {/if}
    </a>
  <ul class="flex flex-row">
    <li class="px-4 font-libre-franklin text-lg !text-black dark:!text-white hover:!text-blue-800 dark:hover:!text-blue-200"><a href="/projects">Projects</a></li>
    <li class="px-4 font-libre-franklin text-lg !text-black dark:!text-white hover:!text-blue-800 dark:hover:!text-blue-200"><a href="/construction">Construction Zone</a></li>
  </ul>
</Navbar>
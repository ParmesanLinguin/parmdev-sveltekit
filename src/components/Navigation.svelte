<script>
  import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, P } from "flowbite-svelte";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { page } from "$app/stores";

  export let showTitle = true;
  export let solidBackground = true;
</script>

<Navbar let:hidden let:toggle class="fixed top-0 z-50 drop-shadow-xl transition-colors duration-300 ease-in {
  solidBackground ? "bg-white dark:!bg-[#01060f] bg-opacity-70 dark:!bg-opacity-70 [backdrop-filter:blur(10px)]" : "!bg-transparent dark:!bg-transparent"}">
  <NavBrand href="/">
    {#if showTitle}
      <span class="self-center whitespace-nowrap text-2xl font-bold font-libre-franklin !text-black dark:!text-white hover:!text-blue-800 dark:hover:!text-blue-200" transition:fade|local>
        Parmesan Linguine
      </span>
    {/if}
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/projects" class="font-libre-franklin text-lg !text-black dark:!text-white hover:!text-blue-800 dark:hover:!text-blue-200">Projects</NavLi>
    <NavLi href="/construction" class="font-libre-franklin text-lg !text-black dark:!text-white hover:!text-blue-800 dark:hover:!text-blue-200">Construction Zone</NavLi>
  </NavUl>
</Navbar>
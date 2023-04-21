<script lang="ts">
  import { Dropdown, DropdownItem } from "flowbite-svelte";

  export let detailsContainerClass: string = "";

  export let img: string | undefined = "";
  export let imgClass: string = "";

  export let title: string = "";
  export let titleClass: string = "";

  export let desc: string = "";
  export let descClass: string = "";

  export let year: string = "";
  export let yearClass: string = "";

  export let links: {
    icon?: string,
    name?: string,
    url: string,
  }[] = [];
</script>

<div class="flex flex-col grow-0 content-center p-4 m-4 bg-[#22335e] rounded-xl shadow hover:bg-gray-700 max-w-[24rem] transition-colors duration-75">
  <div class="flex flex-row">
    {#if img}
      <img class="w-20 h-20 rounded-lg mr-5 {imgClass}" alt="" src="{img}">
    {/if}
    <div class="flex flex-col {detailsContainerClass}">
      <h2 class="text-2xl text-white text-left font-bold font-libre-franklin {titleClass}">{title}</h2>
      <h3 class="mt-[-1px] text-white text-left text-base font-libre-franklin {descClass}">{desc}</h3>
      <h3 class="text-sm text-white text-left font-libre-franklin {yearClass}">{year}</h3>
    </div>
    {#if links.length > 0}
    <div class="ml-auto">
      <button class="m-2 mr-0 w-6 h-6" aria-label="Links to {title}">
        <svg viewBox="0 0 32 32">
          <image xlink:href="/icons/dropdown.svg/" width="32px" height="32px"></image>
        </svg>
      </button>
        <Dropdown frameClass="bg-white px-2 py-2 rounded-lg dark:bg-white">
          {#each links as link}
          <DropdownItem class="bg-white dark:bg-white hover:bg-sky-200 dark:hover:bg-sky-200 rounded-lg">
            <a href="{link.url}" rel="noopener noreferrer" target="_blank" class="flex flex-row">
              {#if link.icon}
                <img src="{link.icon}" class="w-5 h-5 mr-4" alt="">
              {/if}
              {#if link.name}
                <p class="text-sm text-black">{link.name}</p>
              {/if}
            </a>
          </DropdownItem>
          {/each}
        </Dropdown>
    </div>
    
    {/if}
  </div>
  <slot />
</div>
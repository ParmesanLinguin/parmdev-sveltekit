<script lang="ts">
  export let alt: string;
  export let icon: string;
  export let link: string | undefined = undefined;
</script>

{#if link}
  <a href={link}>
    <div class="flex flex-row items-center py-2 px-3 rounded-lg my-2 mx-2 bg-stone-900 hover:bg-sky-900 duration-75">
      <img class="w-8 h-8 fill-white [filter:invert(1)] select-none" src="{icon}" alt={alt}/>
      <p class="ml-4 font-libre-franklin font-bold text-white"><slot /></p>
    </div>
  </a>
{:else}
  <div class="flex flex-row items-center py-2 px-3 rounded-lg my-2 mx-2 bg-stone-900 hover:bg-stone-700 duration-75">
    <img class="w-8 h-8 fill-white [filter:invert(1)] select-none" src="{icon}" alt={alt}/>
    <p class="ml-4 font-libre-franklin font-bold text-white"><slot /></p>
  </div>
{/if}
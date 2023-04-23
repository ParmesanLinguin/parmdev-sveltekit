<script lang="ts">
  export let icon: string;
  export let name: string;
</script>

<div class="flex flex-row content-center justify-left items-center p-4 m-4 bg-[#22335e] rounded-xl hover:bg-gray-600 max-w-[20rem] transition-colors duration-75">
  <img class="w-12 h-12 mr-8 select-none" src={icon} alt="{name}" />
  <p class="grow text-center text-2xl font-libre-franklin text-white">
    <slot />
  </p>
</div>
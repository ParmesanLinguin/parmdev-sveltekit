<script lang="ts">
  let customClass: string = "";
	export { customClass as class };
</script>

<div class="{customClass} w-screen m-auto">
  <div class="m-auto max-w-[1600px] w-screen flex flex-row justify-end items-center h-16 px-8">
    <slot />
  </div>
</div>
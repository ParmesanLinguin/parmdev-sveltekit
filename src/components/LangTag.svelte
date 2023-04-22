<script lang="ts">
  let customClass: string = "";
	export { customClass as class };
</script>

<p class="text-xs px-2 mr-2 py-1 rounded-full font-libre-franklin font-bold {customClass}"><slot/></p>

<script lang="ts">
  import { SvelteComponentTyped } from "svelte";

  let clazz: string = "";
	export { clazz as class };

</script>

<p class="text-xs px-2 mr-2 py-1 rounded-full font-libre-franklin font-bold {clazz}"><slot/></p>

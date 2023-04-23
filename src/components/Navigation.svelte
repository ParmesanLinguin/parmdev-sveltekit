<script>
  import { fade } from "svelte/transition";
  import Navbar from "./Navbar.svelte";

  export let showTitle = true;
  export let solidBackground = true;
</script>

<Navbar solidBackground={solidBackground} showTitle={showTitle}
  links={[{name: "Projects", link: "/projects"}, {name: "Construction Zone", link: "/construction"}]}>
  <a slot="title" href="/" class="mr-auto">
    <span class="self-start block whitespace-nowrap h-auto text-2xl font-bold font-libre-franklin !text-black dark:!text-white hover:!text-blue-800 dark:hover:!text-blue-200" transition:fade|local>
        Parmesan Linguine
    </span>
  </a>    
</Navbar>
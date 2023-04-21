<script lang="ts">
  import Navigation from "../components/Navigation.svelte";
  import Footer from "../components/Footer.svelte";
  import { onMount } from "svelte";
  import { scroll } from "../stores";
  import { page } from "$app/stores";

  let y = 0;

  onMount(() => { 
    addEventListener('scroll', throttled);
    scrolled();
    return () => {
      removeEventListener('scroll', throttled);
    }
  });
    
  function throttled() {
    scrolled();
  }

  function scrolled() {
    y = window.scrollY;
    $scroll = y;
  }

</script>

<div class="bg-white">
  <Navigation solidBackground={y >= 0.01} showTitle={$page.route.id != "/" || y > 30}/>
  <div>
    <slot />
    <Footer />
  </div>
</div>
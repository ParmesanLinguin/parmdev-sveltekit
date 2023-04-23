<script lang="ts">
  import "../app.css";
  import Container from "../components/Container.svelte";
  import { page } from "$app/stores";

</script>

<div class="flex-1 relative">
  <div class="pt-80 pb-[40rem] bg-gradient-to-t from-sky-600 to-emerald-600 dark:from-[#010220] dark:to-[#1f0718]">
    <div class="m-auto pb-20">
      <Container>
        <div>
            <h1 class="text-white dark:text-white m-auto pt-10 font-libre-franklin font-bold text-4xl md:text-6xl">
              {$page.status}
            </h1>
        </div>
  
        <p class="text-white dark:text-white text-center text-lg md:text-2xl pt-2 font-libre-franklin font-medium">
          {$page.error?.message}
        </p>
      </Container>
    </div>
  </div>
</div>
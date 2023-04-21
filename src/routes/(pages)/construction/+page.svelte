<script lang="ts">
  import Container from "../../../components/Container.svelte";

  let image1: HTMLImageElement, image2: HTMLImageElement, image3: HTMLImageElement;
</script>

<style>
  img[id^="image"] {
    --width: 200px;
    --height: 200px;
    position: absolute;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-duration: 5s;
    width: var(--width);
    height: var(--height);
    pointer-events: none;
  }

  #image1 {
    animation-name: image1;
  }

  #image2 {
    animation-name: image2;
  }  
  
  #image3 {
    animation-name: image3;
  }

  @keyframes image1 {
    0% {
        left: calc(55% - var(--width));
        top: calc(65% - var(--height));
    }

    30% {
        left: calc(85% - var(--width));
        top: calc(65% - var(--height));
    }

    50% {
        left: calc(33% - var(--width));
        top: calc(54% - var(--height));
    }

    70% {
        left: calc(0%);
        top: calc(79% - var(--height));
    }

    100% {
        left: calc(55% - var(--width));
        top: calc(65% - var(--height));
    }
}

@keyframes image2 {
    0% {
        left: calc(70% - var(--width));
        top: calc(30% - var(--height));
    }

    32% {
        left: calc(40% - var(--width));
        top: calc(40% - var(--height));
    }

    60% {
        left: calc(51% - var(--width));
        top: calc(100% - var(--height));
    }

    80% {
        left: calc(66% - var(--width));
        top: calc(66% - var(--height));
    }

    100% {
        left: calc(70% - var(--width));
        top: calc(30% - var(--height));
    }
}

@keyframes image3 {
    0% {
        left: calc(85% - var(--width));
        top: calc(90% - var(--height));
    }

    25% {
        left: calc(80% - var(--width));
        top: calc(40% - var(--height));
    }

    60% {
        left: calc(70% - var(--width));
        top: calc(57% - var(--height));
    }

    80% {
        left: calc(40% - var(--width));
        top: calc(66% - var(--height));
    }

    100% {
        left: calc(85% - var(--width));
        top: calc(90% - var(--height));
    }
  }
</style>

<div class="flex-1 relative">
  <div class="pt-80 pb-[40rem] bg-gradient-to-t from-sky-600 to-emerald-600 dark:from-[#010220] dark:to-[#1f0718]">
    <div class="m-auto pb-20">
      <Container>
        <div>
            <h1 class="text-white dark:text-white m-auto pt-10 font-libre-franklin font-bold text-4xl md:text-6xl">
              Construction Zone
            </h1>
        </div>
  
        <p class="text-white dark:text-white text-center text-lg md:text-2xl pt-2 font-libre-franklin font-medium">
          This page is still under construction!
        </p>
      </Container>
    </div>
  </div>
</div>

<div id="images" class="overflow-hidden">
  <img id="image1" class="absolute duration-[5s]" bind:this={image1} src="https://content.presentermedia.com/content/animsp/00022000/22851/construction_guy_sledgehammer_rest_md_nwm_v2.gif" alt="" />
  <img id="image2" class="absolute duration-[5s]" bind:this={image2} src="https://c.tenor.com/BbfKJfP43RwAAAAC/jackhanmer-construction-worker.gif" alt="" />
  <img id="image3" class="absolute duration-[5s]" bind:this={image3} src="https://content.presentermedia.com/files/animsp/00009000/9573/construction_multiple_accidents_md_wm.gif" alt="" />
</div>
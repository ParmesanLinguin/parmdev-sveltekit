<script lang="ts">
  import { fade } from "svelte/transition";
  import { scroll } from "../stores";
  import Container from "../components/Container.svelte";
  import CardContainer from "../components/CardContainer.svelte";
  import ProjectCard from "../components/ProjectCard.svelte";
  import ProjectCardText from "../components/ProjectCardText.svelte";
  import SkillCard from "../components/SkillCard.svelte";

  let y = 0;
  let exists = false;
  let animatedTitle: HTMLElement;

</script>

<svelte:head>
  <title>Parmesan Linguine</title>
</svelte:head>

<div class="bg-white">
  <div>
    <div class="pt-40 bg-gradient-to-t from-sky-600 to-emerald-600 dark:from-[#010220] dark:to-[#1f0718]">
      <div class="m-auto pb-20">
        <img class="self-center rounded-full h-40 sm:h-52 md:h-64 mx-auto" src="/parmpfp.webp" alt=""/>
        <Container>
          <div style="min-height: 80px; md:min-height: 100px;">
            {#if $scroll <= 30}
              <h1 class="text-white dark:text-white m-auto pt-10 font-libre-franklin font-bold text-center text-4xl md:text-6xl" bind:this={animatedTitle} transition:fade|local>
                Parmesan Linguine
              </h1>
            {/if}
          </div>
    
          <p class="text-white dark:text-white text-center text-lg md:text-2xl pt-2 font-libre-franklin font-medium">
            CS student, backend developer, and not-so-great frontend dev
          </p>
        </Container>
      </div>
      <div class="overflow-hidden">
        <svg preserveAspectRatio="none" class="h-[320px] w-full min-w-[1920px] fill-slate-900" preserveAlpha="xMaxYMid" id="visual" viewBox="0 0 900 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 50L900 20L900 50L0 50Z"></path></svg>
      </div>
    </div>
    <div>
      <div class="m-auto bg-slate-900 pt-5 mx-0 flex flex-wrap justify-between items-center">
        <Container>
          <!-- About me -->
          <div class="pt-0"> 
            <h2 class="text-center text-white text-4xl font-libre-franklin font-bold ">
              About me
            </h2>
            <p class="text-justify text-white text-lg font-libre-franklin pt-4 px-4">
              Howdy, I'm Parmesan Linguine! I'm a (soon-to-be) CS student from Ontario, Canada. I spend most of my time writing code, playing music, playing video games, and wasting it watching YouTube videos.
              Hey, on the bright side, I've picked up a lot of trivia knowledge! It's not a <i>total</i> waste.
      
              <br><br>
              My love for programming started when young me found the command prompt on the family computer. I had for a long time been "tech-savvy" (in the sense that teachers would always me to fix their computers), but this was entirely new territory. I wrote some Batch scripts, 
              mostly motivated by trying to hack the school computers, but these attempts proved unsuccessful. I moved on slowly, trying other languages like Scratch, but it wasn't until I released my first project that I really found my love for coding. It was the first time
              that my work was widely appreciated by others. That desire has kept me chugging along so far, and it's helped me learn so much both in the field of computer science as well as in general.
              
              <br><br>
              Nowadays, I mostly write backend software in C#. I like to constantly explore new ideas and try new things, so most of my projects get left in the bin after a couple of months. 
              Unfortunately, as you might be able to tell by this website, I have very little experience in writing frontend software. Maybe if it didn't SUCK so much I'd do it more.
      
              <br><br>
              Other than programming, I enjoy both playing and writing music. I am currently teaching myself piano and electric guitar, as well as learning how to write music both in notation software and DAWs. I hope to one day release an entirely solo album,
              where everything is done by myself from writing to recording to mastering. Other than guitar and piano, I was in our school's concert and jazz bands where I was able to play clarinet, bassoon, and tenor saxophone.
            </p>
          </div>

          <!-- Interests -->
          <div class="pt-24">
            <h2 class="text-center font-libre-franklin font-bold text-white text-4xl justify-middle">
              Interests
            </h2>
            <CardContainer>
              <ProjectCard title="Game Development" titleClass="text-white text-center" 
              detailsContainerClass="bg-slate-900 mb-2 w-full rounded-lg min-h-[3rem] flex justify-center content-center flex-wrap">
                <ProjectCardText>
                  I've been playing video games since I learnt how to walk. More recently, I've began to appreciate how much work goes into creating them and have started to experiment with game engines, with the goal of creating my own games.
                </ProjectCardText>
              </ProjectCard>
              <ProjectCard title="Programming Language Design" titleClass="text-xl text-white text-center" 
                detailsContainerClass="bg-slate-900 mb-2 w-full rounded-lg min-h-[3rem] flex justify-center content-center flex-wrap">
                <ProjectCardText>
                  Having worked with a variety of languages, I've noticed the details that go into designing programming languages. I enjoy studying different languages to find their strengths and weaknesses, and have worked on
                  writing some project languages.
                </ProjectCardText>
              </ProjectCard>
              <ProjectCard title="Music" titleClass="text-xl text-white text-center" 
              detailsContainerClass="bg-slate-900 mb-2 w-full rounded-lg min-h-[3rem] flex justify-center content-center flex-wrap">
                <ProjectCardText>
                  I listen to music at pretty much every waking moment, so it's safe to say it's a big part of my life. Playing music has given me another way to express myself, and I want to use it to share my stories with others. 
                </ProjectCardText>
              </ProjectCard>
            </CardContainer>
            
          </div>

          <!-- Skills -->
          <div class="pt-24 pb-20">
            <h2 class="text-center text-white text-4xl font-libre-franklin font-bold ">
              Skills
            </h2>
            <div class="flex flex-row flex-wrap justify-center">
              <SkillCard name="C-sharp" icon="/icons/csharp.svg">Very Proficient</SkillCard>
              <SkillCard name="JavaScript" icon="/icons/javascript.svg">Proficient</SkillCard>
              <SkillCard name="Python" icon="/icons/python.svg">Some Experience</SkillCard>
              <SkillCard name="TypeScript" icon="/icons/typescript.svg">Some Experience</SkillCard>
              <SkillCard name="Svelte" icon="/icons/svelte.svg">Minor Experience</SkillCard>
            </div>
          </div>
        </Container>
      </div>
    </div> 
  </div>
</div>
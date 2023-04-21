<script lang="ts">
  import { onMount } from "svelte";
  import CardContainer from "../../../components/CardContainer.svelte";
  import Container from "../../../components/Container.svelte";
  import LangTag from "../../../components/LangTag.svelte";
  import ProjectCard from "../../../components/ProjectCard.svelte";
  import ProjectCardText from "../../../components/ProjectCardText.svelte";
  
</script>

<svelte:head>
  <meta property="og:title" content="My Projects | parm.dev" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="/parmpfp.webp" />
  <meta property="og:description" content="A list of my projects, both complete and incomplete." />
  <meta name="description" content="A list of my projects, both complete and incomplete." />
  <title>Parmesan Linguine</title>
</svelte:head>

<div class="flex-1 relative">
  <div class="pt-80 bg-gradient-to-t from-sky-600 to-emerald-600 dark:from-[#010220] dark:to-[#1f0718]">
    <div class="m-auto pb-20">
      <Container>
        <div>
            <h1 class="text-white dark:text-white m-auto pt-10 font-libre-franklin font-bold text-4xl md:text-6xl">
              My Projects
            </h1>
        </div>
  
        <p class="text-white dark:text-white text-center text-lg md:text-2xl pt-2 font-libre-franklin font-medium">
          A comprehensive list of my abominations
        </p>
      </Container>
    </div>
    <div class="overflow-hidden">
      <svg preserveAspectRatio="none" class="h-[320px] w-full min-w-[1920px] fill-slate-900" id="visual" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
        <path d="M0,224L40,213.3C80,203,160,181,240,176C320,171,400,181,480,202.7C560,224,640,256,720,261.3C800,267,880,245,960,202.7C1040,160,1120,96,1200,64C1280,32,1360,32,1400,32L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
      </svg>
    </div>
  </div>
</div>
<div class="bg-slate-900 pb-20">
  <Container>
    <h2 class="text-white text-center dark:text-white m-auto font-libre-franklin font-bold text-3xl md:text-4xl">
      Major projects
    </h2>
    <p class="text-white dark:text-white text-center text-lg md:text-2xl pt-2 font-libre-franklin font-medium">
      These projects took a large amount of time and/or are actively maintained
    </p>
    <div class="flex flex-row justify-center flex-wrap h-auto">
        <ProjectCard title="parm.dev" desc="This website!" year="2022 - pres">
          <ProjectCardText>I decided to rewrite my personal website to be an actual website! Yay! It's written with Svelte and tailwind.</ProjectCardText>
          <div class="flex flex-row pt-2 mt-auto">
            <LangTag class="bg-[#007acc] text-white">TypeScript</LangTag>
            <LangTag class="bg-[#ff3e00] text-black">Svelte</LangTag>
            <LangTag class="bg-[#38bdf8] font text-black">Tailwind</LangTag>
          </div>
        </ProjectCard>

      <ProjectCard title="Monkebot" desc="Discord Bot" year="2020 - pres" img="/monke.webp" links="{[
          {
            url: "https://parm.dev/monke/invite",
            name: "Invite on Discord",
            icon: "/icons/discord.svg",
          },
          {
            url: "https://top.gg/bot/771124545544781824",
            name: "View on top.gg",
            icon: "/icons/link.svg/",
          }
        ]}">
        <ProjectCardText>Monkebot is a fun Discord bot that will join voice channels at random intervals and play monkey noises. Built using the DSharpPlus library in C#, and MongoDB as a database.</ProjectCardText>
        <div class="flex flex-row pt-2 mt-auto">
          <LangTag class="bg-[#178600] text-white">C#</LangTag>
          <LangTag class="bg-[#589636] text-black">MongoDB</LangTag>
        </div>
      </ProjectCard>
      
      <ProjectCard title="hqtrivia.store" desc="Website" year="2018 - 2019">
        <ProjectCardText>My first public project, hqtrivia.store was a website designed for retrieving player stats in the app HQ Trivia from an API. It was well used by many in the community, but shut down when the app cracked down on unauthorized API usage.</ProjectCardText>
        <div class="flex flex-row pt-2">
          <LangTag class="bg-[#4584b6] text-black">Python</LangTag>
          <LangTag class="bg-[#ffffff] text-black">Flask</LangTag>
        </div>
      </ProjectCard>
    </div>

    <h2 class="pt-20 text-white text-center dark:text-white m-auto font-libre-franklin font-bold text-3xl md:text-4xl">
      Minor projects
    </h2>
    <p class="text-white dark:text-white text-center text-lg md:text-2xl pt-2 font-libre-franklin font-medium">
      These are lesser projects, mostly intended for learning
    </p>

    <CardContainer>
      <ProjectCard title="Megathonk" desc="Discord Bot" year="2019" img="/megathonk.webp">
        <ProjectCardText>This was my entry into the 2019 Discord Hack Week competition. It was a bot written in Python that used a recurrent neural network to generate news-articles. In hindsight, the name could have probably been chosen better!</ProjectCardText>
        <div class="flex flex-row pt-2 mt-auto">
          <LangTag class="bg-[#4584b6] text-black">Python</LangTag>
          <LangTag class="bg-[#ef4c2d] text-black">PyTorch</LangTag>
        </div>
      </ProjectCard>

      <ProjectCard title="PLang Experiments" desc="Programming Language" year="2022 - pres" links={[
      {
        name: "Uncertainty (C#)",
        url: "https://github.com/ParmesanLinguin/Uncertainty",
        icon: "/icons/github.svg/"
      },
      {
        name: "PLang-py3 (Py)",
        url: "https://github.com/ParmesanLinguin/plang-py3",
        icon: "/icons/github.svg"
      }]}>
        <ProjectCardText>These were a series of languages I designed and then partially implemented, serving as my introduction to the world of programming language design.</ProjectCardText>
        <div class="flex flex-row pt-2 mt-auto">
          <LangTag class="bg-[#178600] text-white">C#</LangTag>
          <LangTag class="bg-[#4584b6] text-black">Python</LangTag>
        </div>
      </ProjectCard>

      <ProjectCard title="Block Game 2022" desc="Game" year="2021 - 2022">
          <ProjectCardText>Block Game 2022 was a Tetris game inspired by Nintendo's 1989 NES release. It was a final project for a high school CS course, so it was never truly finished. Despite that, it holds a special place in my heart.
            It also served as an introduction to 2D Graphics Libraries.
          </ProjectCardText>
          <div class="flex flex-row pt-2 mt-auto">
            <LangTag class="bg-[#f89820] text-black">Java</LangTag>
          </div>
        </ProjectCard>
    </CardContainer>
  </Container>
</div>


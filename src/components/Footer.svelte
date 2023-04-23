<script>
  import SocialTag from "./SocialTag.svelte";
</script>

<div class="flex flex-col justify-center items-center bg-[#09090b] pt-10 pb-10 overflow-hidden">
  <p class="font-libre-franklin text-white text-2xl font-bold mb-4">Socials</p>
  <div class="flex flex-row flex-grow flex-wrap justify-center">
    <SocialTag icon="/icons/github.svg" alt="GitHub" link="https://github.com/ParmesanLinguin">ParmesanLinguin</SocialTag>
    <SocialTag icon="/icons/discord.svg" alt="Discord">Parmesan Linguine#2601</SocialTag>
  </div>
</div>  

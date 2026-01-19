<template>
  <div class="space-y-24 py-12 font-mono">
    <section class="space-y-10">
      <div class="space-y-2">
        <h2
          class="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-none"
        >
          Identity: Shinone Mio
        </h2>
        <p class="text-phys-cyan opacity-80 text-sm tracking-[0.2em] uppercase">
          Physical Layer / Human Existence
        </p>
      </div>

      <div class="max-w-3xl space-y-8">
        <p class="text-lg text-slate-100 leading-relaxed">
          インターネットという「論理層」に身を置きながら、情報通信技術の深淵と、物事の「論理」を愛する猫。
          このポータルは、デジタルな存在の背後にある、一人の個人としての確かな記録
          —— 私の<span class="text-phys-cyan font-bold"
            >「物理層（Physical Layer）」</span
          >を記述するための仕様書です。
        </p>

        <p
          class="text-slate-400 leading-relaxed italic border-l-2 border-phys-cyan/30 pl-6 text-sm"
        >
          A cat navigating the "Logical Layer" of the internet, with a profound
          love for the depths of information technology and logic. This portal
          serves as a specification to document my "Physical Layer"—the tangible
          record of an individual behind a digital existence.
        </p>
      </div>

      <div
        class="flex items-center gap-3 text-xs bg-phys-cyan/5 border border-phys-cyan/10 w-fit px-4 py-2 rounded-sm shadow-[0_0_15px_rgba(0,255,255,0.05)]"
      >
        <span class="relative flex h-2 w-2">
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-phys-cyan opacity-75"
          ></span>
          <span
            class="relative inline-flex rounded-full h-2 w-2 bg-phys-cyan"
          ></span>
        </span>
        <span class="text-phys-cyan opacity-90 tracking-widest uppercase">
          Status: Stable / Initializing Physical Specs
        </span>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const pageTitle = "";
const siteSuffix = " 汐猫みお Physical Mode Official";

useSeoMeta({
  title: pageTitle,
  ogTitle: `${pageTitle}${siteSuffix}`,

  description:
    "汐猫みお (SHIONE Mio) の物理層ポータルサイト。デジタルな存在の背後にある、一人の個人としての記録。",
  ogDescription:
    "汐猫みお (SHIONE Mio) の物理層ポータルサイト。デジタルな存在の背後にある、一人の個人としての記録。",

  ogUrl: "https://physical.shiomiolog.com/",
  ogType: "website",

  ogImage: "https://physical.shiomiolog.com/ogp.png",
  twitterCard: "summary_large_image",
  twitterSite: "@shiomiolog",
  twitterCreator: "@shiomiolog",
});
</script>

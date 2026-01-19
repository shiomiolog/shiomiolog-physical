<template>
  <div class="space-y-16 font-sans">
    <div class="space-y-2">
      <h2 class="text-4xl font-bold text-phys-cyan font-mono m-0 p-0">
        Products
      </h2>
      <p
        class="text-xs text-slate-500 uppercase tracking-widest opacity-60 font-mono"
      >
        Software and Hardware Artifacts
      </p>
    </div>

    <div class="space-y-16">
      <section
        v-for="item in products"
        :key="item.title"
        class="group max-w-2xl"
      >
        <div class="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
          <h3
            class="text-xl font-bold text-white group-hover:text-phys-cyan transition-colors font-mono"
          >
            {{ item.title }}
          </h3>
          <span
            v-if="item.tag"
            class="text-[10px] px-2 py-0.5 border border-phys-cyan/30 text-phys-cyan rounded-sm uppercase font-mono tracking-tighter"
          >
            {{ item.tag }}
          </span>
        </div>

        <p class="text-sm mt-4 text-slate-300 leading-relaxed">
          {{ item.description }}
        </p>

        <div class="mt-6 flex flex-col gap-2 text-xs font-mono">
          <div v-if="item.github" class="flex items-center gap-2">
            <span class="text-slate-500">Source:</span>
            <a
              :href="item.github"
              target="_blank"
              class="text-phys-cyan hover:text-white hover:underline transition-all"
            >
              {{ item.github.replace("https://github.com/", "") }} >>
            </a>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-slate-500">Stack:</span>
            <span class="text-slate-400">{{ item.tech }}</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const pageTitle = "Products";
const siteSuffix = " | 汐猫みお Physical Mode Official";

useSeoMeta({
  title: pageTitle,
  ogTitle: `${pageTitle}${siteSuffix}`,
  ogDescription: "Identity, Career, and Affiliations of SHINONE Mio.",
});
</script>

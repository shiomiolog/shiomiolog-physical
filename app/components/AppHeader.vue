<template>
  <header class="w-full bg-phys-dark border-b border-phys-cyan/5 font-mono">
    <div class="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-4 group">
        <img
          src="/image001.webp"
          alt=""
          class="w-8 h-8 rounded-sm object-cover opacity-90 group-hover:opacity-100 transition-opacity"
        />

        <h1
          class="text-lg text-white tracking-tighter font-bold m-0 p-0 leading-none group-hover:text-phys-cyan transition-colors"
        >
          physical.shiomiolog.com
        </h1>
      </NuxtLink>

      <div class="flex items-center gap-8">
        <nav class="flex items-center gap-6 text-[13px] text-slate-400">
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="hover:text-phys-cyan transition-colors py-1 border-b border-transparent"
            active-class="text-white border-phys-cyan"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <a
          href="https://shiomiolog.com"
          target="_blank"
          rel="noopener noreferrer"
          class="text-[11px] px-3 py-1 border border-phys-cyan/30 rounded-full text-phys-cyan hover:bg-phys-cyan/10 transition-all flex items-center gap-1"
        >
          Portal /
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const navItems = [
  { label: "Home", path: "/" },
  { label: "Profile", path: "/profile" },
  { label: "Products", path: "/products" },
  { label: "Hobbies", path: "/hobbies" },
  //{ label: "Blog", path: "/blog" },
];
</script>

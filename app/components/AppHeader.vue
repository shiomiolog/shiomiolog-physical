<template>
  <header class="w-full bg-phys-dark border-b border-phys-cyan/5 font-mono sticky top-0 z-50">
    <div class="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between gap-4">
      
      <NuxtLink to="/" class="flex items-center gap-4 group z-[60] flex-shrink-0">
        <img
          src="/image001.webp"
          alt=""
          class="w-8 h-8 rounded-sm object-cover opacity-90 group-hover:opacity-100 transition-opacity"
        />
        <h1 class="text-base md:text-lg text-white tracking-tighter font-bold leading-none group-hover:text-phys-cyan transition-colors">
          physical.shiomiolog.com
        </h1>
      </NuxtLink>

      <nav class="hidden md:flex items-center gap-6 text-[13px] text-slate-400">
        <NuxtLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="hover:text-phys-cyan transition-colors py-1 border-b border-transparent"
          active-class="text-white border-phys-cyan"
        >
          {{ item.label }}
        </NuxtLink>
        <a
          href="https://shiomiolog.com"
          target="_blank"
          class="text-[11px] px-3 py-1 border border-phys-cyan/30 rounded-full text-phys-cyan hover:bg-phys-cyan/10 transition-all ml-2"
        >
          Portal /
        </a>
      </nav>

      <button 
        @click="toggleMenu"
        class="md:hidden z-[60] p-2 text-phys-cyan focus:outline-none"
        aria-label="Toggle Menu"
      >
        <div class="w-6 h-5 relative flex flex-col justify-between">
          <span :class="['w-full h-0.5 bg-current transition-all duration-300 transform origin-left', isMenuOpen ? 'rotate-45 translate-x-1' : '']"></span>
          <span :class="['w-full h-0.5 bg-current transition-opacity duration-300', isMenuOpen ? 'opacity-0' : '']"></span>
          <span :class="['w-full h-0.5 bg-current transition-all duration-300 transform origin-left', isMenuOpen ? '-rotate-45 translate-x-1' : '']"></span>
        </div>
      </button>

      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 translate-x-full"
        enter-to-class="opacity-100 translate-x-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-x-0"
        leave-to-class="opacity-0 translate-x-full"
      >
        <div 
          v-if="isMenuOpen"
          class="fixed inset-0 bg-[#0f172a] z-[55] flex flex-col items-start justify-center px-10 gap-8 md:hidden"
        >
          <div class="flex flex-col gap-8">
            <NuxtLink
              v-for="item in navItems"
              :key="item.path"
              :to="item.path"
              @click="closeMenu"
              class="text-2xl font-bold text-white hover:text-phys-cyan transition-colors font-mono flex items-center gap-3"
              active-class="text-phys-cyan"
            >
              <span class="text-phys-cyan/40 text-sm font-normal">0{{ navItems.indexOf(item) + 1 }}</span>
              // {{ item.label }}
            </NuxtLink>
          </div>
          
          <div class="mt-8 pt-8 border-t border-white/10 w-full">
            <a
              href="https://shiomiolog.com"
              target="_blank"
              class="inline-block text-phys-cyan text-sm border border-phys-cyan/30 px-6 py-3 rounded-sm hover:bg-phys-cyan/10 transition-all font-mono"
            >
              Go to Portal /
            </a>
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const navItems = [
  { label: "Home", path: "/" },
  { label: "Profile", path: "/profile" },
  { label: "Products", path: "/products" },
  { label: "Hobbies", path: "/hobbies" },
];

const isMenuOpen = ref(false)
const route = useRoute()

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

watch(() => route.path, () => {
  closeMenu()
})
</script>
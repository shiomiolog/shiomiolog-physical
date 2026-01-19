<template>
  <div class="space-y-16 pb-24 font-sans text-sm">
    <div class="space-y-2">
      <h2
        class="text-4xl font-bold text-phys-cyan font-mono m-0 p-0 tracking-tighter"
      >
        Hobbies
      </h2>
      <p
        class="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-mono opacity-60"
      >
        Personal Interests & Favorites
      </p>
    </div>

    <div class="space-y-16">
      <section
        v-for="cat in hobbyCategories"
        :key="cat.category"
        class="space-y-8"
      >
        <h3
          class="text-lg font-bold text-white border-b border-phys-cyan/20 pb-1 w-fit font-mono"
        >
          // {{ cat.category }}
        </h3>

        <div class="grid grid-cols-1 gap-10 ml-4">
          <div
            v-for="item in cat.items"
            :key="item.name"
            class="space-y-4 max-w-3xl"
          >
            <h4
              class="text-base font-bold text-white border-l-2 border-phys-cyan pl-3"
            >
              {{ item.name }}
            </h4>

            <p class="text-slate-200 leading-relaxed pl-3 mb-6">
              {{ item.description }}
            </p>

            <div
              v-if="item.details"
              class="pl-3 space-y-1 font-mono text-[13px]"
            >
              <div
                v-for="detail in item.details"
                :key="detail.label"
                class="flex items-baseline py-1 border-b border-white/5 last:border-0"
              >
                <span
                  class="text-phys-cyan font-bold w-40 flex-shrink-0 opacity-90"
                >
                  {{ detail.label }}:
                </span>
                <span class="text-slate-300">
                  {{ detail.value }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { hobbyCategories } from "~/utils/hobbyData";
useHead({ title: "Hobbies  | 汐猫みお Physical Mode Official" });
</script>

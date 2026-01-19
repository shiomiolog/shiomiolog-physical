<template>
  <div
    class="space-y-16 pb-24 font-sans text-sm leading-relaxed text-slate-200"
  >
    <section>
      <h1 class="text-4xl font-bold text-phys-cyan font-mono m-0 p-0">
        Profile
      </h1>
    </section>

    <section>
      <h2
        class="border-phys-cyan border-l-4 border-b border-opacity-30 px-3 pb-1 text-xl font-bold text-phys-cyan font-mono uppercase tracking-wider"
      >
        whois
      </h2>

      <div class="mt-8 space-y-10">
        <section v-if="whois">
          <h3
            class="text-lg font-bold text-white mb-4 flex items-center gap-2 font-mono"
          >
            <span class="w-1.5 h-1.5 bg-phys-cyan"></span> About Me
          </h3>
          <ul class="list-none space-y-2 font-mono text-white ml-4">
            <li>
              <span class="text-phys-cyan font-bold">Handle:</span> 汐猫 みお /
              SHINONE Mio
            </li>
            <li>
              <span class="text-phys-cyan font-bold">ID:</span> shiomiolog
            </li>
            <li>
              <span class="text-phys-cyan font-bold">Gender:</span>
              {{ whois.gender }}
            </li>
            <li>
              <span class="text-phys-cyan font-bold">Pronoun:</span>
              {{ whois.pronoun }}
            </li>
            <li>
              <span class="text-phys-cyan font-bold">Occupation:</span>
              {{ whois.occupation }}
            </li>
            <li>
              <span class="text-phys-cyan font-bold">Existence:</span>
              {{ whois.existence }}
            </li>
          </ul>
        </section>

        <section
          v-if="whois"
          class="space-y-4 ml-4 border-l border-phys-cyan/20 pl-6"
        >
          <h3
            class="text-[10px] uppercase tracking-[0.2em] text-phys-sub font-bold font-mono"
          >
            Simple explanation
          </h3>
          <p class="text-white">{{ whois.explanation_ja }}</p>
          <p class="italic text-slate-400 leading-normal text-xs font-mono">
            {{ whois.explanation_en }}
          </p>
        </section>

        <section v-if="goals" class="ml-4 space-y-6">
          <h3
            class="text-[10px] uppercase tracking-[0.2em] text-phys-sub font-bold font-mono"
          >
            What I want to work on in my life
          </h3>
          <ul class="space-y-6">
            <li
              v-for="(goal, index) in goals"
              :key="index"
              class="relative pl-5 before:content-['>'] before:absolute before:left-0 before:text-phys-cyan before:font-bold"
            >
              <p class="text-white">{{ goal.ja }}</p>
              <p class="text-slate-400 text-xs mt-1 leading-snug">
                {{ goal.en }}
              </p>
            </li>
          </ul>
        </section>
      </div>
    </section>

    <section>
      <h2
        class="border-phys-cyan border-l-4 border-b border-opacity-30 px-3 pb-1 text-xl font-bold text-phys-cyan font-mono uppercase tracking-wider"
      >
        Career
      </h2>
      <div
        v-if="career"
        class="mt-8 ml-4 relative border-l border-phys-cyan/20 pl-8 space-y-8"
      >
        <div v-for="item in career" :key="item.date" class="relative">
          <div
            class="absolute -left-[36.5px] top-1.5 w-4 h-4 rounded-full bg-phys-dark border-2 border-phys-cyan"
          ></div>
          <time class="font-mono text-phys-cyan font-bold text-xs block mb-1">{{
            item.date
          }}</time>
          <div class="text-white font-medium">{{ item.event }}</div>
          <div
            v-if="item.en"
            class="text-xs text-slate-500 italic mt-0.5 font-mono"
          >
            {{ item.en }}
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2
        class="border-phys-cyan border-l-4 border-b border-opacity-30 px-3 pb-1 text-xl font-bold text-phys-cyan font-mono uppercase tracking-wider"
      >
        Memberships
      </h2>
      <div v-if="memberships" class="mt-8 ml-4 space-y-6">
        <div
          v-for="m in memberships"
          :key="m.ja"
          class="pl-4 border-l border-phys-cyan/20 space-y-1"
        >
          <p class="text-sm text-white font-bold leading-none">{{ m.ja }}</p>
          <p
            class="text-[10px] text-slate-500 font-mono uppercase tracking-wider leading-tight"
          >
            {{ m.en }}
          </p>
        </div>
      </div>
    </section>

    <section>
      <h2
        class="border-phys-cyan border-l-4 border-b border-opacity-30 px-3 pb-1 text-xl font-bold text-phys-cyan font-mono uppercase tracking-wider"
      >
        Qualification
      </h2>
      <div v-if="qualifications" class="mt-8 ml-4 space-y-3 font-mono">
        <div v-for="q in qualifications" :key="q.date" class="flex gap-6">
          <span class="text-phys-cyan font-bold w-20 flex-shrink-0">{{
            q.date
          }}</span>
          <span class="text-white"
            >{{ q.name }}
            <span class="text-slate-500 text-xs ml-2">({{ q.en }})</span></span
          >
        </div>
      </div>
    </section>

    <section>
      <h2
        class="border-phys-cyan border-l-4 border-b border-opacity-30 px-3 pb-1 text-xl font-bold text-phys-cyan font-mono uppercase tracking-wider"
      >
        Skills
      </h2>
      <ul
        v-if="skills"
        class="list-none ml-4 mt-8 space-y-3 font-mono text-white"
      >
        <li v-for="skill in skills" :key="skill.ja" class="flex gap-3">
          <span class="text-phys-cyan font-bold">-</span>
          <div>
            <p>{{ skill.ja }}</p>
            <p v-if="skill.en" class="text-xs text-slate-500">{{ skill.en }}</p>
          </div>
        </li>
      </ul>
    </section>

    <section>
      <h2
        class="border-phys-cyan border-l-4 border-b border-opacity-30 px-3 pb-1 text-xl font-bold text-phys-cyan font-mono uppercase tracking-wider"
      >
        Technical and research affairs
      </h2>
      <div
        v-if="techActivities"
        class="mt-8 ml-4 relative border-l border-phys-cyan/20 pl-8 space-y-10"
      >
        <div v-for="act in techActivities" :key="act.date" class="relative">
          <div
            class="absolute -left-[36.5px] top-1.5 w-4 h-4 rounded-full bg-phys-dark border-2 border-phys-cyan"
          ></div>
          <time class="font-mono text-phys-cyan font-bold text-xs block mb-1">{{
            act.date
          }}</time>
          <div class="text-white font-bold leading-snug">{{ act.title }}</div>
          <p v-if="act.en" class="text-xs text-slate-500 mt-1 italic font-mono">
            {{ act.en }}
          </p>
        </div>
      </div>
    </section>

    <section class="pt-16 border-t border-phys-cyan/10">
      <h2
        class="text-lg font-bold text-phys-cyan font-mono mb-6 flex items-center gap-3"
      >
        Send email
      </h2>
      <div class="ml-4 space-y-6 font-mono">
        <p class="text-base">
          <span
            class="bg-phys-cyan/5 text-phys-cyan px-3 py-1 border border-phys-cyan/10 rounded"
          >
            mail@${THIS_DOMAIN} <</span
          >
        </p>
        <div class="text-xs space-y-2 text-slate-400 leading-relaxed">
          <p>※特定電子メールの送付はお断りします。</p>
          <p>
            You can verify me at
            <a
              href="https://keybase.io/shiomiolog"
              class="text-phys-cyan underline underline-offset-4"
              >Keybase.io</a
            >.
          </p>
          <p class="italic text-slate-500">
            Encrypted messages are welcome via any channels ;)
          </p>
        </div>
      </div>
    </section>

    <section
      class="pt-20 opacity-10 hover:opacity-100 transition-opacity duration-500 border-t border-phys-cyan/5 text-[12px] text-slate-500"
    >
      <h2 class="text-[10px] uppercase tracking-[0.4em] mb-6 italic font-mono">
        // Formal / Legal Identity
      </h2>
      <div class="ml-4 space-y-4">
        <p>
          For formal inquiries and legal identity verification, please refer to
          the following portal:
        </p>
        <a
          :href="PROFILE_CONF?.LEGAL_URL"
          target="_blank"
          class="inline-block border border-slate-700 px-3 py-1 hover:border-phys-cyan hover:text-phys-cyan transition-all"
        >
          {{ PROFILE_CONF?.LEGAL_URL }}
        </a>
        <p class="leading-relaxed">
          法的氏名に基づくプロフィールおよび活動実績は、上記ドメインにて一元的に管理されています。
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const pageTitle = "Profile";
const siteSuffix = " | 汐猫みお Physical Mode Official";

useSeoMeta({
  // ブラウザのタブ用（titleTemplateが適用されるので、これだけでOK）
  title: pageTitle,

  // SNS共有用（テンプレートが効かないので、フルタイトルを渡すのが確実だにゃ🐾💎）
  ogTitle: `${pageTitle}${siteSuffix}`,

  ogDescription: "Identity, Career, and Affiliations of SHINONE Mio.",
  // ...その他の設定
});
</script>

<template>
  <footer
    class="py-12 border-t border-phys-cyan/10 font-mono text-[11px] leading-tight text-slate-400"
  >
    <div class="flex flex-col items-end text-right space-y-2">
      <p>
        Hosted on
        <a
          href="https://workers.cloudflare.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-phys-cyan hover:text-white transition-colors underline decoration-phys-cyan/30 underline-offset-2"
          >Cloudflare Workers</a
        >. Source:
        <a
          href="https://github.com/shiomiolog/shiomiolog-physical"
          target="_blank"
          rel="noopener noreferrer"
          class="text-phys-cyan hover:text-white transition-colors underline decoration-phys-cyan/30 underline-offset-2"
          >shiomiolog/shiomiolog-physical</a
        >
      </p>

      <p>
        Site revision:
        <span class="text-slate-300 font-medium"
          >550e8400e29b41d4a716446655440000</span
        >
      </p>

      <div class="flex flex-col items-end gap-2">
        <p>
          This work is licensed under
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-phys-cyan hover:text-white transition-colors underline decoration-phys-cyan/30 underline-offset-2"
            >CC BY-NC-SA 4.0</a
          >. &copy; 2025-2026 汐猫 みお (SHINONE Mio).
        </p>

        <a
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          target="_blank"
          rel="noopener noreferrer"
          class="opacity-60 hover:opacity-100 transition-opacity"
        >
          <img
            src="https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-nc-sa.svg"
            alt="CC BY-NC-SA 4.0"
            class="h-6 w-auto"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

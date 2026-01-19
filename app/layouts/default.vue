<template>
  <div
    class="min-h-screen bg-phys-dark text-phys-text font-mono selection:bg-phys-cyan selection:text-phys-dark"
  >
    <div class="max-w-5xl mx-auto px-6">
      <AppHeader />

      <main class="py-12 min-h-[60vh]">
        <slot />
      </main>

      <AppFooter />
    </div>
  </div>
</template>

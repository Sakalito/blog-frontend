<script setup lang="ts">
const links = [
  { label: 'Acceuil', to: '/' },
  { label: 'Contact', to: '/contact' },
];
</script>

<template>
  <header
    class="sticky top-0 z-40 flex justify-between w-full px-3 transition-colors duration-500 backdrop-blur lg:z-50 lg:border-b lg:border-slate-900/10 bg-white/95 supports-backdrop-blur:bg-white/60"
  >
    <div
      class="border-b max-w-8xl border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10"
    >
      <RouterLink to="/" class="inline-flex items-center py-2">
        <img src="/assets/df.ico" class="h-12" />
      </RouterLink>
    </div>
    <div class="flex flex-grow">
      <div class="relative items-center hidden ml-auto lg:flex">
        <nav class="text-sm font-semibold leading-6 text-slate-700">
          <ul class="flex space-x-8">
            <li v-for="link of links">
              <RouterLink
                :to="link.to"
                class="px-4 py-4 mx-auto font-bold text-black hover:text-sky-500 dark:hover:text-sky-400"
              >
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

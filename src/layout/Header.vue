<template>
  <header>
    <div
      class="sticky top-0 z-40 flex-none w-full transition-colors duration-500 backdrop-blur lg:z-50 lg:border-b lg:border-slate-900/10 bg-white/95 supports-backdrop-blur:bg-white/60"
    >
      <div
        class="mx-auto border-b max-w-8xl border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10"
      >
        <a
          href="#"
          class="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto"
        >
          <img src="../../assets/df.ico" class="relative w-auto h-20" />
        </a>
      </div>
      <div class="flex">
        <div class="relative items-center hidden ml-auto lg:flex">
          <nav class="text-sm font-semibold leading-6 text-slate-700">
            <ul class="flex space-x-8">
              <li>
                <router-link
                  to="/"
                  class="px-4 py-4 mx-auto font-bold text-black hover:text-sky-500 dark:hover:text-sky-400"
                  >Accueil</router-link
                >
              </li>
              <li>
                <router-link
                  to="/article"
                  class="px-4 py-4 mx-auto font-bold text-black hover:text-sky-500"
                  >Article</router-link
                >
              </li>
              <li>
                <router-link
                  to="/contact"
                  class="px-4 py-4 mx-auto font-bold text-black hover:text-sky-500"
                  >Contact</router-link
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>

    </div>
  </header>
</template>

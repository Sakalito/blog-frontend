<template>
  <header>
    <h1 class="mb-4 text-3xl font-extrabold sm:text-4xl text-slate-900">
      Blog DevFamily
    </h1>
    <h2>Bienvenue sur le blog de l'assocation DevFamily</h2>
    <section class="max-w-sm mt-3 sm:mx-auto sm:px-4">
      <form class="flex flex-wrap -mx-2">
        <div class="px-2 grow-[9999] basis-64 mt-3">
          <div class="relative group">
            <input
              name="email_address"
              type="email"
              aria-label="Email address"
              class="block w-full py-2 pl-12 pr-3 leading-5 bg-white border border-transparent rounded-md shadow appearance-none ring-1 ring-slate-900/5 sm:text-sm placeholder:text-slate-400 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-slate-700/20 dark:ring-slate-200/20 dark:focus:ring-sky-500 dark:text-white"
              placeholder="Enregistre toi avec ton mail"
            />
          </div>
        </div>
        <button
          type="submit"
          class="flex-auto px-3 py-2 text-sm font-semibold text-white border-transparent rounded-md shadow bg-sky-500 border-y hover:bg-sky-600 dark:hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-300"
        >
          S'enregistrer
        </button>
      </form>
    </section>
  </header>
  <body>
      <div class="relative sm:pb-12 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]">
      <div class="space-y-16">
    <article class="relative group">
      <div class="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50">
        <div class="relative">
        <h3
          class="pt-8 text-base font-bold tracking-tight text-slate-900 lg:pt-0"
        >
          Article 1
        </h3>
        </div>
        
        <time datetime="2022-05-16">Lundi 16 Mai 2022</time>
      </div>
      <span
        class="-inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl"
      ></span>
    </article>
    </div>
    </div>
  </body>
</template>

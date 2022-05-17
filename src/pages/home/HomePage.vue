<script setup lang="ts">
interface Post {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
}

const posts: Post[] = [
  {
    id: '6283861bda83b6bf955b9a2a',
    title: 'Article 1',
    description: 'description super longue',
    createdAt: new Date(),
  },
  {
    id: '62838621be7f05ca747666e1',
    title: 'Article 2',
    description: 'description 2 super longue',
    createdAt: new Date(),
  },
  {
    id: '62838627f6d1a242af74ed43',
    title: 'Article 3',
    description: 'description 3 super longue',
    createdAt: new Date(),
  },
];

const formatDate = (date: Date): string =>
  date.toLocaleDateString('fr', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
</script>

<template>
  <div class="p-3 md:p-6">
    <header class="my-16 sm:text-center">
      <h1
        class="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900 dark:text-slate-200"
      >
        Blog DevFamily
      </h1>
      <h2 class="text-lg text-slate-700 dark:text-slate-400">
        Bienvenue sur le blog de l'assocation DevFamily
      </h2>
    </header>
    <section class="">
      <article v-for="post of posts" class="mb-12">
        <div
          class="transition-all p-6 ease-in-out -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl hover:bg-sky-50/70 dark:hover:bg-slate-800/50"
        >
          <time
            :datetime="formatDate(post.createdAt)"
            class="text-slate-500"
            v-text="formatDate(post.createdAt)"
          ></time>
          <h3
            class="pt-2 text-base font-bold tracking-tight text-slate-900"
          >
            {{ post.title }}
          </h3>
          <p class="mt-2 mb-4 text-slate-600">
            {{ post.description }}
          </p>
          <RouterLink
            :to="'/post/' + post.id"
            class="font-medium text-sky-500"
            v-text="'Read more ...'"
          />
        </div>
      </article>
    </section>
  </div>
</template>

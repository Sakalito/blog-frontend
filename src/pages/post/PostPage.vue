<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

import type { Post } from './post.interface';
import { formatDate } from '../../utils/date.utils';

const route = useRoute();
const router = useRouter();

const state = reactive({
  postId: '',
  post: {
    id: '',
    title: 'Article 1',
    description: 'description 1',
    createdAt: new Date(),
    content: '<div class="text-red-500">html content here</div>',
  } as Post,
});

// TODO: must validate if correct mongoId
const isValidMongoId = (value: string): boolean => value.length === 24;

const httpClient = axios.create({ baseURL: 'http://localhost:3001' });
onMounted(async () => {
  const postIdInUrl = route.params.id as string;

  if (!isValidMongoId(postIdInUrl)) {
    console.error('INCORRECT POST ID, RECEIVED : ' + postIdInUrl);
    router.push({ name: 'home' });
  }

  try {
    // const response = await httpClient.get<Post>(`/post/${state.postId}`);
    // console.warn(response.data);
  } catch (error) {
    console.error('ERROR WHILE FETCHING POST ' + postIdInUrl, error);
    router.push({ name: 'home' });
  }
});
</script>

<template>
  <div class="p-8">
    <div
      class="flex justify-between px-8 mb-16 font-medium text-slate-600"
    >
      <RouterLink to="/" class="inline-flex"> &lt; Go back </RouterLink>
      <RouterLink to="/edit" class="inline-flex">
        <img
          src="/assets/editor.png"
          class="object-right-top w-auto h-5"
        />
      </RouterLink>
    </div>

    <article class="px-24">
      <dd>{{ formatDate(state.post.createdAt) }}</dd>
      <h1 class="text-4xl font-extrabold text-slate-900">
        {{ state.post.title }}
      </h1>
      <p class="my-8 mb-16">{{ state.post.description }}</p>
      <section v-html="state.post.content"></section>
    </article>
  </div>
</template>

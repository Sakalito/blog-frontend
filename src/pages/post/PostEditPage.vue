<template>
  <h1 class="font-bold text-center">Edit an article</h1>
  <Editor v-model="state.post.content" />
  <button
    class="flex items-center justify-center w-40 h-12 font-bold text-white border-black bg-slate-600 rounded-2xl hover:bg-slate-900"
    @click="update"
  >
    update article
  </button>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import Editor from '@tinymce/tinymce-vue';
import axios from 'axios';
import tinymce from 'tinymce';
import type { Post } from './post.interface';
import { useRoute } from 'vue-router';

const httpClient = axios.create({ baseURL: 'http://localhost:3001' });
const route = useRoute();
const postIdInUrl = route.params.id as string;

const state = reactive({
  content: 'text',
  canSend: false,
  postId: postIdInUrl,
  post: {} as Post,
});

onMounted(async () => {
  const response = await httpClient.get<Post>(`/posts/${state.postId}`);
  state.post = response.data;
});

const update = async () => {
  state.canSend = true;
  if (state.canSend)
    await httpClient.patch(`/posts/publish/${state.post.id}`, {
      title: state.post.title,
      description: state.post.description,
      content: state.post.content,
    });
  state.canSend = false;
};
</script>

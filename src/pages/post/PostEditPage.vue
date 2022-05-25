<template>
  <h3>Title</h3>
  <input type="text" v-model="state.post.title" class="border-black" />
  <h3>Description</h3>
  <textarea v-model="state.post.description"></textarea>
  <h3>Content</h3>
  <h1 class="font-bold text-center">Edit an article</h1>
  <Editor v-model="state.post.content" />
  <form action="/home">
    <button
      class="flex items-center justify-center w-40 h-12 font-bold text-white border-black bg-slate-600 rounded-2xl hover:bg-slate-900"
      @click="update"
    >
      Update article
    </button>
  </form>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import Editor from '@tinymce/tinymce-vue';
import axios from 'axios';
import tinymce from 'tinymce';
import type { Post } from './post.interface';
import { useRoute } from 'vue-router';
import { formatDate } from '../../utils/date.utils';

const httpClient = axios.create({ baseURL: 'http://localhost:3001' });
const route = useRoute();
const postIdInUrl = route.params.id as string;

const state = reactive({
  content: '',
  canSend: false,
  postId: postIdInUrl,
  post: {} as Post,
  title: '',
  description: '',
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
  formatDate(state.post.createdAt);
};
</script>

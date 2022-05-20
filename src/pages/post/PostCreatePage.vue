<template>
  <h1 class="font-bold text-center">Créer un article</h1>
  <Editor v-model="state.content" />

  <button
    class="flex items-center justify-center w-40 h-12 font-bold text-white border-black bg-slate-600 rounded-2xl hover:bg-slate-900"
    @click="submit "
  >
    send post
  </button>
</template>

<script setup lang="ts">
import { onMounted, reactive, watch } from 'vue';
import Editor from '@tinymce/tinymce-vue';
import axios from 'axios';

const state = reactive({ content: '', canSend: false });

watch(
  () => state.content,
  () => console.log(state.content),
);
const httpClient = axios.create({ baseURL: 'http://localhost:3001' });

const submit = async () => {
  state.canSend = true;

  console.log(state.canSend);
  if (state.canSend)
    await httpClient.post('/posts', {
      title: '',
      description: '',
      content: state.content,
    });
  state.canSend = false;
};
</script>

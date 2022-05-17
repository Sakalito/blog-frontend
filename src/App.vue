<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import axios from 'axios';

import Header from './layout/Header.vue';

// Creation de la requete
const httpClient = axios.create({ baseURL: 'http://localhost:3001' });
// met blog en état reactif
const state = reactive({
  blog: '',
});

// appele les requetes
onMounted(async () => {
  const message = await httpClient.get('/');
  console.log(message);
  const blog = await httpClient.get('/blog');
  console.log(blog);
  console.log(blog.data);
  state.blog = blog.data;
});
</script>

<template>
  <Header></Header>
  <main>
    <router-view />
  </main>
</template>

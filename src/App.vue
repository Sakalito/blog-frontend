<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import HomePage from './pages/home/HomePage.vue';
import PostPage from './pages/post/PostPage.vue';
import index from './index.css'

//Creation de la requete
const httpClient = axios.create({ baseURL: 'http://localhost3001:' })
//met blog en état reactif 
const state = reactive({
  blog: ''
})
//appele les requetes
onMounted(async () => {
  const message = await httpClient.get('/')
  console.log(message)
  const blog = await httpClient.get('/blog')
  console.log(blog)
  console.log(blog.data)
  state.blog = blog.data
});

</script>

<template>
<!-- retourne les resultats-->
<div>{{ state.blog }}</div>
<HomePage/>
<PostPage/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

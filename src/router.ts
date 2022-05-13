import { createRouter, createWebHistory } from 'vue-router'; 
import { appRoutes as routes } from './app.routes';
import HomePage from './pages/home/HomePage.vue'
import PostPage from './pages/post/PostPage.vue'

export const router = createRouter({
  routes,
  history: createWebHistory(),
});

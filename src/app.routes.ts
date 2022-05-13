import { type RouteRecordRaw } from 'vue-router';
export const appRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('./pages/home/HomePage.vue'),
  },
  {
    name: 'Article',
    path: '/article',
    component:() => import('./pages/post/PostPage.vue'),
  }
  // Always last
];


import type { RouteRecordRaw } from 'vue-router';

export const appRoutes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/',
    component: () => import('./pages/home/HomePage.vue'),
    alias: '/home',
  },
  {
    name: 'post',
    path: '/post/:id',
    component: () => import('./pages/post/PostPage.vue'),
  },
  {
    name: 'contact',
    path: '/contact',
    component: () => import('./pages/contact/Contact.vue'),
  },
  {
    name: 'edit',
    path: '/edit',
    component: () => import('./pages/post/PostEditPage.vue'),
  },
  {
    name: 'create',
    path: '/create',
    component: () => import('./pages/post/PostCreatePage.vue'),
  },
  {
    name: 'notFoundError',
    path: '/:catchAll(.*)*',
    component: () => import('./pages/error/NotFoundErrorPage.vue'),
  },
  // Always last
];

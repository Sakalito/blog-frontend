import { type RouteRecordRaw } from 'vue-router';
export const appRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('./pages/home/HomePage.vue'),
    alias: '/home',
  },
  {
    name: 'article',
    path: '/article',
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
    name: 'newpage',
    path: '/newpage',
    component: () => import('./pages/post/PostEditPage.vue'),
  },
  {
    name: 'notfounderrorpage',
    path: '/:catchAll(.*)*',
    component : () => import('./pages/Error/NotFoundErrorPage.vue'),
  }
  // Always last
];


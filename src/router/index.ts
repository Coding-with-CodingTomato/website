import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CommandsView from '../views/CommandsView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/commands', component: CommandsView },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

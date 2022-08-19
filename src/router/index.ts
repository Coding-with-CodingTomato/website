import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CommandsView from '../views/CommandsView.vue';
import ImpressumView from '../views/ImpressumView.vue';
import DatenschutzView from '../views/DatenschutzView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/commands', component: CommandsView },
  { path: '/impressum', component: ImpressumView },
  { path: '/datenschutz', component: DatenschutzView },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

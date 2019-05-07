import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home';
import About from '@/views/About';
import TypePage from '@/views/TypePage';
import DetailPage from '@/views/DetailPage';
import OutsidePage from '@/views/OutsidePage';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/type/:name', component: TypePage },
  { path: '/detail', redirect: '/detail/1' },
  { path: '/detail/:pokemonId', component: DetailPage },
  { path: '/outside', component: OutsidePage },
];

const router = new VueRouter({
  routes,
});

export default router;

import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home';
import About from '@/views/About';
import TypePage from '@/views/TypePage';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/type/:name', component: TypePage },
];

const router = new VueRouter({
  routes,
});

export default router;

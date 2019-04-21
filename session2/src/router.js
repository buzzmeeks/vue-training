import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home';
import About from '@/views/About';

Vue.use(VueRouter);

const routes = [{ path: '/', component: Home }, { path: '/about', component: About }];

const router = new VueRouter({
  routes,
});

export default router;

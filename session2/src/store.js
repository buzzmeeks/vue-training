import Vue from 'vue';
import Vuex from 'vuex';

import { pokemons } from '@/assets/data/pokemons';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    pokemons: [...pokemons],
    belt: [],
  },
});

export default store;

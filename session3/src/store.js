import Vue from 'vue';
import Vuex from 'vuex';
import { pokemons } from '@/assets/data/pokemons';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    pokemons: [...pokemons],
    belt: [],
  },
  mutations: {
    putInBelt(state, pokemonId) {
      const pokemon = state.pokemons.find(pokemon => pokemon.id === pokemonId);
      state.belt.push(pokemon);
      state.pokemons = state.pokemons.filter(pokemon => pokemon.id !== pokemonId);
    },
    removeFromBelt(state, pokemonId) {
      const pokemon = state.belt.find(pokemon => pokemon.id === pokemonId);
      state.pokemons.push(pokemon);
      state.belt = state.belt.filter(pokemon => pokemon.id !== pokemonId);
    },
  },
  getters: {
    isBeltFull(state) {
      return state.belt.length >= 6;
    },
  },
  actions: {
    async getPokemons({ commit }) {
      const { data: pokemons } = await axios.get('/api/pokemons');
      commit('setPokemons', pokemons);

      const { data: belt } = await axios.get('/api/belt');
      commit('setBelt', belt);
    },
  },
});

export default store;

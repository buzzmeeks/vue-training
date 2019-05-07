import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    pokemons: [],
    belt: [],
  },
  mutations: {
    setBelt(state, belt) {
      state.belt = belt;
    },
    setPokemons(state, pokemons) {
      state.pokemons = pokemons;
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

    async putInBelt({ dispatch }, id) {
      await axios.post(`/api/pokemons/${id}/move/`);
      await dispatch('getPokemons');
    },

    async removeFromBelt({ dispatch }, id) {
      await axios.post(`/api/belt/${id}/move/`);
      await dispatch('getPokemons');
    },
  },
});

export default store;

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import { pokemons } from '@/assets/data/pokemons';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    pokemons: [...pokemons],
    belt: [],
    zoom: null,
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
    setZoom(state, info) {
      console.log(info);
      state.zoom = {
        id: info.id,
        name: info.names.find(({ language }) => language.name === 'fr').name,
        color: info.color.name,
        shape: info.shape.name,
        front: info.sprites.front_default,
        back: info.sprites.back_default,
      };
    },
  },
  actions: {
    async zoom({ commit, state }, pokemonId) {
      if (state.zoom && state.zoom.id === pokemonId) {
        return;
      }
      const { data: speciesData } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
      );
      const { data: pokemonData } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
      );
      commit('setZoom', { ...speciesData, ...pokemonData });
    },
  },
  getters: {
    isBeltFull(state) {
      return state.belt.length >= 6;
    },
  },
});

export default store;

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import map from './map.json';
import { fetchPokemon } from './pokemonHelper.js';

Vue.use(Vuex);

const INITIAL_CHANCE = 0.1;
const store = new Vuex.Store({
  state: {
    pokemons: [],
    belt: [],
    outside: {
      position: {
        x: 8,
        y: 0,
      },
      map,
      chanceToSeeAPokemon: INITIAL_CHANCE,
      fight: {
        pokemon: null,
        wild: null,
      },
    },
  },
  mutations: {
    setBelt(state, belt) {
      state.belt = belt;
    },
    setPokemons(state, pokemons) {
      state.pokemons = pokemons;
    },
    setPosition(state, position) {
      state.outside.position = position;
    },
    increaseChance(state) {
      state.outside.chanceToSeeAPokemon += 0.1;
    },
    resetChance(state) {
      state.outside.chanceToSeeAPokemon = INITIAL_CHANCE;
    },
    startFight(state, pokemon) {
      state.outside.fight.wild = pokemon;
      state.outside.fight.pokemon = state.belt[0];
    },
    flee(state) {
      state.outside.fight.wild = null;
      state.outside.fight.pokemon = null;
    },
  },
  getters: {
    isBeltFull(state) {
      return state.belt.length >= 6;
    },
    isFighting(state) {
      return Boolean(state.outside.fight.wild);
    },
    isOnHighGrass(state) {
      const { x, y } = state.outside.position;
      return state.outside.map[y][x].type === 'high-grass';
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

    async moveLeft({ state, dispatch }) {
      if (state.outside.position.x > 0) {
        dispatch('move', { x: state.outside.position.x - 1, y: state.outside.position.y });
      }
    },
    async moveRight({ state, dispatch }) {
      if (state.outside.position.x < 19) {
        dispatch('move', { x: state.outside.position.x + 1, y: state.outside.position.y });
      }
    },
    async moveUp({ state, dispatch }) {
      if (state.outside.position.y > 0) {
        dispatch('move', { x: state.outside.position.x, y: state.outside.position.y - 1 });
      }
    },
    async moveDown({ state, dispatch }) {
      if (state.outside.position.y < 19) {
        dispatch('move', { x: state.outside.position.x, y: state.outside.position.y + 1 });
      }
    },
    async move({ state, commit }, { x, y }) {
      // Do not move if fighting
      if (state.outside.fight.wild) {
        return;
      }
      const tile = state.outside.map[y][x];
      if (tile.type === 'high-grass') {
        if (state.belt.length === 0) {
          // Avoid high grass if no pokemon in belt
          alert('Les hautes herbes sont trop dangereuses seul !');
          return;
        } else {
          // Randomly choose to see a pokemon
          const rand = Math.random();
          if (rand < state.outside.chanceToSeeAPokemon) {
            // We find a pokemon, starting fight
            const pokemon = await fetchPokemon(Math.floor(Math.random() * 151));
            commit('startFight', pokemon);
            commit('resetChance');
          } else {
            // Increment chance to see a pokemon next time
            commit('increaseChance');
          }
        }
      }
      commit('setPosition', { x, y });
    },
  },
});

export default store;

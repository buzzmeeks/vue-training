<template>
  <div class="box">
    <h1>Tous mes pokémons</h1>
    <ul class="pokemons-list">
      <li v-for="p in pokemons" :key="p.id" class="pokemons-list-item">
        <Pokemon :pokemon="p"></Pokemon>
        <button class="pokemon-list-item-action" @click="bring(p.id)" :disabled="!canBringMore">
          <i class="fas fa-angle-right"></i>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import Pokemon from './Pokemon';
export default {
  components: {
    Pokemon,
  },
  methods: {
    bring(pokemonId) {
      this.$store.commit('putInBelt', pokemonId);
    },
  },
  computed: {
    canBringMore() {
      return !this.$store.getters.isBeltFull;
    },
    pokemons() {
      return this.$store.state.pokemons;
    },
  },
};
</script>

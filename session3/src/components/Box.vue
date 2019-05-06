<template>
  <DecoratedBox>
    <template #header>
      <h2>Tous mes pokémons</h2>
    </template>
    <ul class="pokemons-list">
      <li v-for="p in pokemons" :key="p.id" class="pokemons-list-item">
        <Pokemon :pokemon="p"></Pokemon>
        <button class="pokemon-list-item-action" @click="bring(p.id)" :disabled="!canBringMore">
          <i class="fas fa-angle-right"></i>
        </button>
      </li>
    </ul>
  </DecoratedBox>
</template>

<script>
import Pokemon from './Pokemon';
import DecoratedBox from './DecoratedBox';
export default {
  components: {
    Pokemon,
    DecoratedBox,
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

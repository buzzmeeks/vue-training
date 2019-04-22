<template>
  <div class="box">
    <h1>Mes pokémons préférés</h1>
    <ul class="pokemons-list">
      <li v-for="p in favorites" :key="p.id" class="pokemons-list-item">
        <Pokemon :pokemon="p"></Pokemon>
        <button class="pokemon-list-item-action" @click="back(p.id)">
          <i class="fas fa-angle-left"></i>
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
    back(pokemonId) {
      this.$store.commit('removeFromBelt', pokemonId);
    },
  },
  computed: {
    favorites() {
      return this.$store.state.belt;
    },
  },
};
</script>

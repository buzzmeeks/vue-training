<template>
  <DecoratedBox>
    <template #header>
      <h2>
        <i class="fa fa-heart" style="margin-right: 0.5rem;"></i>
        Mes pokémons préférés ({{favorites.length}})
      </h2>
    </template>
    <ul class="pokemons-list">
      <li v-for="p in favorites" :key="p.id" class="pokemons-list-item">
        <Pokemon :pokemon="p"></Pokemon>
        <button class="pokemon-list-item-action" @click="back(p.id)" :disabled="disabledBack">
          <i class="fas fa-angle-left"></i>
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
    back(pokemonId) {
      this.$store.dispatch('removeFromBelt', pokemonId);
    },
  },
  computed: {
    favorites() {
      return this.$store.state.belt;
    },
    disabledBack() {
      return (
        this.$store.getters.isFighting ||
        (this.$store.getters.isOnHighGrass && this.favorites.length < 2)
      );
    },
  },
};
</script>

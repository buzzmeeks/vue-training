<template>
  <div class="box">
    <h1>Tous mes pokémons</h1>
    <ul class="pokemons-list">
      <li v-for="p in pokemons" :key="p.id" class="pokemons-list-item">
        <Pokemon :pokemon="p" @show-type="showType"></Pokemon>
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
  props: {
    pokemons: { type: Array, required: true },
    canBringMore: { type: Boolean, required: true },
  },
  methods: {
    bring(pokemonId) {
      this.$emit('bring', pokemonId);
    },
    showType(name) {
      this.$emit('show-type', name);
    },
  },
};
</script>

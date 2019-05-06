<template>
  <div class="home">
    <Box :pokemons="pokemons" @bring="putInBelt" :can-bring-more="!isBeltFull"></Box>
    <Belt :favorites="belt" @back="removeFromBelt"></Belt>
  </div>
</template>

<script>
import axios from 'axios';
import { pokemons } from '@/assets/data/pokemons';
import Box from '@/components/Box';
import Belt from '@/components/Belt';

export default {
  name: 'home',
  components: {
    Belt,
    Box,
  },
  data: () => ({
    belt: [],
    pokemons: [...pokemons],
    typeInformation: null,
  }),
  methods: {
    putInBelt(pokemonId) {
      const pokemon = this.pokemons.find(pokemon => pokemon.id === pokemonId);
      this.belt.push(pokemon);
      this.pokemons = this.pokemons.filter(pokemon => pokemon.id !== pokemonId);
    },
    removeFromBelt(pokemonId) {
      const pokemon = this.belt.find(pokemon => pokemon.id === pokemonId);
      this.pokemons.push(pokemon);
      this.belt = this.belt.filter(pokemon => pokemon.id !== pokemonId);
    },
  },
  computed: {
    isBeltFull() {
      return this.belt.length >= 6;
    },
  },
};
</script>

<style lang="scss">
.home {
  display: flex;
  align-items: flex-start;
  .box {
    padding: 1rem;
    border: 1px solid black;
    margin: 1rem;
    flex: 1;
    background: white;
  }
}
</style>

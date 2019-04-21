<template>
  <div class="home">
    <Box
      :pokemons="pokemons"
      @bring="putInBelt"
      :can-bring-more="!isBeltFull"
      @show-type="showType"
    ></Box>
    <Belt :favorites="belt" @back="removeFromBelt" @show-type="showType"></Belt>
    <TypeInformation :type="typeInformation"></TypeInformation>
  </div>
</template>

<script>
import axios from 'axios';
import { pokemons } from '@/assets/data/pokemons';
import Box from '@/components/Box';
import Belt from '@/components/Belt';
import TypeInformation from '@/components/TypeInformation';

export default {
  name: 'home',
  components: {
    Belt,
    Box,
    TypeInformation,
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
    async showType(typeName) {
      const info = await axios.get(`https://pokeapi.co/api/v2/type/${typeName}`);
      this.typeInformation = {
        name: typeName,
        data: info.data.damage_relations,
      };
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
  font-family: 'Indie Flower', cursive;
  .box {
    padding: 1rem;
    border: 1px solid black;
    margin: 1rem;
    flex: 1;
  }
}
</style>

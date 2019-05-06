<template>
  <div>
    <h1>{{title}}</h1>
    <nav>
      <router-link :to="previous" v-if="previous">Précédent</router-link>
      <router-link :to="next" v-if="next">Suivant</router-link>
    </nav>
    <div>
      <img :src="image">
    </div>
    <div>{{name}}</div>
    <div>
      <button @click="reverseImage">{{reverseButtonLabel}}</button>
    </div>

    <Type v-for="type in types" :key="type" :name="type"></Type>
  </div>
</template>

<script>
import Type from '@/components/Type';
import axios from 'axios';

export default {
  components: {
    Type: Type,
  },
  data() {
    return {
      imageType: 'front',
      types: ['fire', 'ice'],
      imageFront: null,
      imageBack: null,
      name: null,
    };
  },
  computed: {
    reverseButtonLabel() {
      return this.imageType === 'front' ? 'Montrer de dos' : 'Montrer de face';
    },
    title() {
      return `Pokemon n°${this.$route.params.pokemonId} du pokédex`;
    },
    next() {
      const id = Number(this.$route.params.pokemonId);
      if (id < 151) {
        return `/detail/${id + 1}`;
      } else {
        return null;
      }
    },
    previous() {
      const id = Number(this.$route.params.pokemonId);
      if (id > 1) {
        return `/detail/${id - 1}`;
      } else {
        return null;
      }
    },
    image() {
      return this.imageType === 'front' ? this.imageFront : this.imageBack;
    },
  },
  created() {
    this.fetchPokemon();
  },
  watch: {
    $route() {
      this.fetchPokemon();
    },
  },
  methods: {
    reverseImage() {
      this.imageType = this.imageType === 'front' ? 'back' : 'front';
    },
    async fetchPokemon() {
      const id = this.$route.params.pokemonId;
      const { data: pokemonData } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const { data: speciesData } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`
      );
      const data = { ...pokemonData, ...speciesData };
      const { types, sprites, names } = data;
      this.types = types.map(item => item.type.name);
      this.imageFront = sprites.front_default;
      this.imageBack = sprites.back_default;
      this.name = names.find(item => item.language.name === 'fr').name;
    },
  },
};
</script>

<style lang="scss">
</style>
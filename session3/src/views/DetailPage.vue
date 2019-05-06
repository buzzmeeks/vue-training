<template>
  <div class="detail-page">
    <div class="detail_content">
      <div class="header">
        <router-link :to="previous" v-if="previous">
          <i class="fas fa-angle-left"></i>
        </router-link>
        <h1>{{title}}</h1>
        <router-link :to="next" v-if="next">
          <i class="fas fa-angle-right"></i>
        </router-link>
      </div>
      <div>
        <button @click="reverseImage">{{reverseButtonLabel}}</button>
      </div>
      <div class="detail_body">
        <div class="img-container">
          <img :src="image">
        </div>
        <div class="types">
          <Type v-for="type in types" :key="type" :name="type"></Type>
        </div>
      </div>
    </div>
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
      return `${this.name} #${this.$route.params.pokemonId}`;
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
.detail-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  .detail_content {
    background: white;
    padding: 1rem;
    width: 50%;
  }
  .header {
    display: flex;
    align-items: center;
    h1 {
      flex: 1 0 auto;
      text-align: center;
    }
    a {
      font-size: 18px;
    }
  }
  .detail_body {
    display: flex;
    align-items: center;
    justify-content: center;
    .types {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
}
</style>
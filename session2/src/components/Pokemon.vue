<template>
  <div class="pokemon">
    <img :src="pokemon.image" @click="onImageClicked">
    <div>
      <div class="pokemon-name">{{ pokemon.name }}</div>
      <ul class="pokemon-types-list">
        <li v-for="type in pokemon.types" :key="type" class="pokemon-types-list-item">
          <Type :name="type"></Type>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Type from './Type';

export default {
  components: {
    Type,
  },
  props: {
    pokemon: { type: Object },
  },
  methods: {
    onTypeClicked(name) {
      this.$emit('show-type', name);
    },
    onImageClicked() {
      this.$store.dispatch('zoom', this.pokemon.id);
    },
  },
};
</script>

<style lang="scss">
.pokemon {
  display: flex;
  align-items: flex-start;
  padding: 20px;
  img {
    border: 1px solid black;
    margin-right: 10px;
  }
  .pokemon-name {
    font-size: 14px;
    font-weight: bold;
    font-family: 'Pokemon Fire Red Regular';
  }
}

.pokemon-types-list {
  margin-top: 10px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.pokemon-types-list-item {
  list-style: none;
  margin: 0.2rem;
}
</style>

<template>
  <div class="zoom box">
    <h1>{{pokemon ? pokemon.name : 'Zoom'}}</h1>
    <div class="content" v-if="pokemon">
      <img :src="image">
      <div class="info">
        <div>Couleur: {{pokemon.color}}</div>
        <div>Forme: {{pokemon.shape}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    display: 'front',
  }),
  props: {
    pokemon: { type: Object, required: false, default: null },
  },
  methods: {
    onImageClicked() {
      this.display = this.display === 'front' ? 'back' : 'front';
    },
  },
  computed: {
    image() {
      return this.pokemon[this.display];
    },
  },
};
</script>

<style lang="scss">
.zoom {
  min-height: 200px;
  font-family: 'Pokemon Fire Red Regular';
  h1 {
    font-size: 16px;
  }
  .content {
    display: flex;
    align-items: center;
    font-size: 12px;
    img {
      margin-right: 10px;
    }
    .info {
      > *:not(:first-child) {
        margin-top: 10px;
      }
    }
  }
}
</style>
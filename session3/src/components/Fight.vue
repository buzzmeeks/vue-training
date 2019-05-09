<template>
  <div class="fight">
    <div class="is-captured" v-if="alreadyCaptured">Déjà capturé</div>
    <img class="pokemon-img" :src="pokemonImage">
    <img class="wild-img" :src="wildImage">
    <div class="actions">
      <button class="capture" v-if="!alreadyCaptured" @click="capture">Capturer</button>
      <button class="flee" @click="flee">Fuir</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    pokemonImage() {
      return this.$store.state.outside.fight.pokemon.imageBack;
    },
    wildImage() {
      return this.$store.state.outside.fight.wild.image;
    },
    alreadyCaptured() {
      const wildId =
        this.$store.state.outside.fight.wild && this.$store.state.outside.fight.wild.id;
      return (
        this.$store.state.pokemons.findIndex(p => p.id === wildId) > -1 ||
        this.$store.state.belt.findIndex(p => p.id === wildId) > -1
      );
    },
  },
  methods: {
    flee() {
      this.$store.commit('flee');
    },
    capture() {
      this.$store.dispatch('capturePokemon');
    },
  },
};
</script>

<style lang="scss">
.fight {
  position: relative;
  width: 200px;
  height: 200px;
  background: white;
  .pokemon-img {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .wild-img {
    position: absolute;
    top: 0;
    right: 0;
  }
  .actions {
    display: flex;
    :not(:first-child) {
      margin-left: 10px;
    }
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 10px;
  }
  .is-captured {
    position: absolute;
    top: 10px;
    left: 10px;
  }
}
</style>
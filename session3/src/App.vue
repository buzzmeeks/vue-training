<template>
  <div>
    <nav id="mainNav">
      <router-link to="/" exact>Homepage</router-link>
      <router-link to="/detail">Pokédex</router-link>
    </nav>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$store.dispatch('getPokemons');
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: 'Pokemon Fire Red Regular';
  font-style: normal;
  font-weight: normal;
  src: local('Pokemon Fire Red Regular'), url('./assets/fonts/pokemon-normal.woff2') format('woff2');
}

body {
  font-family: 'Indie Flower', cursive;
}

nav#mainNav {
  display: flex;
  a {
    color: black;
    text-decoration: none;
    background: lightgrey;
    padding: 0 0.5rem;
    &.router-link-active {
      background: darkred;
      color: white;
    }
  }
}

.content {
  padding: 1rem;
  background: darkred;
}

.pokemons-list {
  padding: 0;
  &-item {
    list-style: none;
    border: 1px darkgrey dashed;
    margin: 1rem 0;
    display: flex;
    align-items: center;
    .pokemon {
      flex: 1;
    }
    .pokemon-list-item-action {
      margin-right: 20px;
    }
  }
}
</style>

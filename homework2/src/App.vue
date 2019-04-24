<template>
  <div id="app">
    <nav>
      <router-link to="/">Homepage</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <div style="border: 1px solid red;padding:1em">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
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

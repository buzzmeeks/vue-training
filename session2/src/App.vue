<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Home from './views/Home';
export default {
  name: 'App',
  components: {
    Home,
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

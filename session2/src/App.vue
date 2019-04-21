<template>
  <div id="app">
    <h1>Un titre</h1>
    <Home></Home>
  </div>
</template>

<script>
import Home from './views/Home'
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

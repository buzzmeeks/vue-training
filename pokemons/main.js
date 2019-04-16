Vue.component('pokemon-component', {
  template: `
    <div>Un pokémon</div>
  `
})
Vue.component('pokemons-box', {
  template: `
  <div class="box">
    <h1>Tous mes pokémons</h1>
    Step 1: Display pokemon here !!
  </div>
  `
})
Vue.component('pokemons-belt', {
  template: `
  <div class="box">
    <h1>Mes pokémons préférés</h1>
    Step 2: Display pokemon here<br />
    Step3: Move them between the two boxes
  </div>
  `
})

const app = new Vue({
  el: '#app',
  data: {
    // Trust me here, data/pokemons.js is now available on data, we will talk about this synthax later
    pokemons: { ...pokemons }
  }
})

Vue.component('pokemon-component', {
  template: `
    <div class="pokemon">
      <img :src="pokemon.image">
      <div>
        <div class="pokemon-name">{{pokemon.name}}</div>
        <ul class="pokemon-types-list">
          <li v-for="type in pokemon.types" :key="type" class="pokemon-type pokemon-types-list-item" :class="type">{{type}}</li>
        </ul>
      </div>
    </div>
  `,
  props: {
    pokemon: { type: Object }
  }
})
Vue.component('pokemons-box', {
  template: `
  <div class="box">
    <h1>Tous mes pokémons</h1>
    <ul class="pokemons-list">
      <li v-for="p in pokemons" :key="p.id" class="pokemons-list-item">
        <pokemon-component :pokemon="p"></pokemon-component>
        <button class="pokemon-list-item-action" @click="bring(p.id)" :disabled="!canBringMore"><i class="fas fa-angle-right"></i></button>
      </li>
    </ul>
  </div>
  `,
  props: {
    pokemons: { type: Array, required: true },
    canBringMore: { type: Boolean, required: true }
  },
  methods: {
    bring(pokemonId) {
      this.$emit('bring', pokemonId)
    }
  }
})
Vue.component('pokemons-belt', {
  template: `
  <div class="box">
    <h1>Mes pokémons préférés</h1>
    <ul class="pokemons-list">
      <li v-for="p in favorites" :key="p.id" class="pokemons-list-item">
        <pokemon-component :pokemon="p"></pokemon-component>
        <button class="pokemon-list-item-action" @click="back(p.id)"><i class="fas fa-angle-left"></i></button>
      </li>
    </ul>
  </div>
  `,
  props: {
    favorites: { type: Array, required: true }
  },
  methods: {
    back(pokemonId) {
      this.$emit('back', pokemonId)
    }
  }
})

const app = new Vue({
  el: '#app',
  data: {
    belt: [],
    // Trust me here, data/pokemons.js is now available on data, we will talk about this synthax later
    pokemons: [...pokemons]
  },
  methods: {
    putInBelt(pokemonId) {
      const pokemon = this.pokemons.find(pokemon => pokemon.id === pokemonId)
      this.belt.push(pokemon)
      this.pokemons = this.pokemons.filter(pokemon => pokemon.id !== pokemonId)
    },
    removeFromBelt(pokemonId) {
      const pokemon = this.belt.find(pokemon => pokemon.id === pokemonId)
      this.pokemons.push(pokemon)
      this.belt = this.belt.filter(pokemon => pokemon.id !== pokemonId)
    }
  },
  computed: {
    isBeltFull() {
      return this.belt.length >= 6
    }
  }
})

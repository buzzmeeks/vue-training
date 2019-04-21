<template>
  <div class="pokemon-type" :class="name">{{ name }}</div>
</template>

<script>
export default {
  props: {
    name: { type: String, requuired: true },
  },
};
</script>

<style lang="scss">
.pokemon-type {
  border-radius: 10px;
  color: white;
  box-shadow: 2px 2px 2px lightgrey;
  text-transform: capitalize;
  padding: 0.5rem;
  text-align: center;
  min-width: 70px;
  font-family: 'Pokemon Fire Red Regular';
  font-size: 8px;
}

.pokemon-type.bug {
  background-color: #a8b820;
}
.pokemon-type.dark {
  background-color: #705848;
}
.pokemon-type.dragon {
  background-color: #7038f8;
}
.pokemon-type.electric {
  background-color: #f8d030;
}
.pokemon-type.fairy {
  background-color: #ee99ac;
}
.pokemon-type.fighting {
  background-color: #c03028;
}
.pokemon-type.fire {
  background-color: #f08030;
}
.pokemon-type.flying {
  background-color: #a890f0;
}
.pokemon-type.ghost {
  background-color: #705898;
}
.pokemon-type.grass {
  background-color: #78c850;
}
.pokemon-type.ground {
  background-color: #e0c068;
}
.pokemon-type.ice {
  background-color: #98d8d8;
}
.pokemon-type.normal {
  background-color: #a8a878;
}
.pokemon-type.poison {
  background-color: #a040a0;
}
.pokemon-type.psychic {
  background-color: #f85888;
}
.pokemon-type.rock {
  background-color: #b8a038;
}
.pokemon-type.steel {
  background-color: #b8b8d0;
}
.pokemon-type.water {
  background-color: #6890f0;
}
</style>
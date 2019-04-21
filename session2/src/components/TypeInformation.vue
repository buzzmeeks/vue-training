<template>
  <div class="box type-information">
    <div v-if="type">
      <h1>{{ type.name }}</h1>
    </div>
    <div v-else>Pas de type sélectionné</div>
  </div>
</template>

<script>
export default {
  props: {
    type: { type: Object, required: false, default: null },
  },
};
</script>

<style lang="scss">
.type-information {
  h1 {
    text-transform: capitalize;
  }
}
</style>

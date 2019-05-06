<template>
  <div class="box type-information">
    <div v-if="type">
      <h1>{{ type.name }}</h1>
      <ul>
        <li v-for="(info, key) in type.data" :key="key">
          <div>{{key}}</div>
          <ul>
            <li v-for="type in info" :key="type.name">
              <Type :name="type.name"></Type>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div v-else>Pas de type sélectionné</div>
  </div>
</template>

<script>
import Type from './Type.vue';
export default {
  components: {
    Type,
  },
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

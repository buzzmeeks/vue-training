<template>
  <div class="outside-page">
    <Fight v-if="isFighting"></Fight>
    <Map v-else></Map>
    <Controls></Controls>
  </div>
</template>

<script>
import Map from '@/components/Map';
import Controls from '@/components/Controls';
import Fight from '@/components/Fight';

export default {
  components: { Map, Controls, Fight },
  computed: {
    isFighting() {
      return this.$store.getters.isFighting;
    },
  },
};
</script>

<style lang="scss">
.outside-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  > *:not(:first-child) {
    margin-top: 3rem;
  }
}
</style>
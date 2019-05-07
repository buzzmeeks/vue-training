<template>
  <div class="outside-page">
    <Map></Map>
    <Controls></Controls>
  </div>
</template>

<script>
import Map from '@/components/Map';
import Controls from '@/components/Controls';

export default {
  components: { Map, Controls },
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
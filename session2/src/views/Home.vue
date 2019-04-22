<template>
  <div class="home">
    <div class="column">
      <Box></Box>
    </div>
    <div class="column">
      <Zoom :pokemon="zoom"></Zoom>
      <Belt></Belt>
    </div>
  </div>
</template>

<script>
import Box from '@/components/Box';
import Belt from '@/components/Belt';
import Zoom from '@/components/Zoom';

export default {
  name: 'home',
  components: {
    Belt,
    Box,
    Zoom,
  },
  computed: {
    zoom() {
      return this.$store.state.zoom;
    },
  },
};
</script>

<style lang="scss">
.home {
  display: flex;
  align-items: flex-start;
  .column {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .box {
    padding: 1rem;
    border: 1px solid black;
    margin: 1rem;
    flex: 1;
  }
}
</style>

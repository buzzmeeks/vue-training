<template>
  <div class="home">
    <Box></Box>
    <Belt></Belt>
  </div>
</template>

<script>
import Box from '@/components/Box';
import Belt from '@/components/Belt';

export default {
  name: 'home',
  components: {
    Belt,
    Box,
  },
};
</script>

<style lang="scss">
.home {
  display: flex;
  align-items: flex-start;
  .box {
    padding: 1rem;
    border: 1px solid black;
    margin: 1rem;
    flex: 1;
  }
}
</style>

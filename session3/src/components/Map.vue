<template>
  <div class="map">
    <div class="map_player" :style="playerPositionStyle"></div>
    <template v-for="(row, rowIndex) in map">
      <div
        class="map_tile"
        v-for="(tile, tileIndex) in row"
        :key="'' + rowIndex + ' ' + tileIndex"
        :class="tile.type"
      ></div>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    playerPositionStyle() {
      const position = this.$store.state.outside.position;
      return { left: `${position.x * 20 + 5}px`, top: `${position.y * 20 + 5}px` };
    },
    map() {
      return this.$store.state.outside.map;
    },
  },
};
</script>


<style lang="scss">
$tileSize: 20px;
$mapSize: 20;
.map {
  position: relative;
  width: $mapSize * $tileSize;
  height: $mapSize * $tileSize;
  background: white;
  display: flex;
  flex-wrap: wrap;
  &_tile {
    width: $tileSize;
    height: $tileSize;
    box-sizing: border-box;
    &.grass {
      background: green;
    }
    &.high-grass {
      background: darkgreen;
    }
    &.road {
      background: sandybrown;
    }
  }
  &_player {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: black;
    z-index: 10;
  }
}
</style>
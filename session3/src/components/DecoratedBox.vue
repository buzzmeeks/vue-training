<template>
  <div class="box">
    <div class="box_header">
      <slot name="header"></slot>
    </div>
    <div class="box_body">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
.box {
  padding: 1rem;
  border: 1px solid black;
  background: white;
}
</style>
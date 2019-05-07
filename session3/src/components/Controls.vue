<template>
  <div class="controls">
    <div class="main">
      <div class="joystick">
        <button class="joystick_button up"></button>
        <button class="joystick_button down"></button>
        <button class="joystick_button left"></button>
        <button class="joystick_button right"></button>
      </div>
      <div class="actions">
        <button class="actions_button a">A</button>
        <button class="actions_button b">B</button>
      </div>
    </div>
    <div class="secondary">
      <button class="secondary_button">Start</button>
      <button class="secondary_button">Select</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.controls {
  $joystickButtonSize: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  padding: 1rem;
  .main,
  .secondary {
    display: flex;
    align-items: center;
  }
  .main {
    align-self: stretch;
    justify-content: space-around;
    margin-bottom: 2rem;
  }
  .joystick {
    position: relative;
    width: $joystickButtonSize * 3;
    height: $joystickButtonSize * 3;
    &_button {
      width: $joystickButtonSize;
      height: $joystickButtonSize;
      padding: 0;
      color: white;
      border: none;
      background: black;
      position: absolute;
    }
    .up {
      top: 0;
      left: $joystickButtonSize;
    }
    .down {
      bottom: 0;
      left: $joystickButtonSize;
    }
    .left {
      top: $joystickButtonSize;
      left: 0;
    }
    .right {
      top: $joystickButtonSize;
      right: 0;
    }
  }
  .actions {
    display: flex;
    justify-content: center;
    &_button {
      &:not(:first-child) {
        margin-left: 10px;
      }
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 2px solid black;
      text-align: center;
      padding: 0;
      color: white;
      &.a {
        background: darkred;
      }
      &.b {
        background: darkblue;
      }
    }
  }
  .secondary {
    display: flex;
    justify-content: center;
    &_button {
      &:not(:first-child) {
        margin-left: 10px;
      }
      width: 30px;
      height: 15px;
      border-radius: 10%;
      border: 2px solid black;
      background: lightgrey;
      text-align: center;
      font-size: 10px;
      text-decoration: none;
      padding: 0;
      color: black;
    }
  }
}
</style>
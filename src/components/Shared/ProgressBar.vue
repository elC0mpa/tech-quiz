<template>
  <div>
    <slot></slot>
    <div class="progress-bar">
      <span :style="spanStyle"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  data() {
    return {};
  },
  props: {
    color: {
      type: String,
      default: "",
    },
    width: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    spanStyle() {
      return `width: ${this.width}%;background-color: ${this.color}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.progress-bar {
  height: 2.5rem;
  position: relative;
  background: #ddd;
  border-radius: 25px;
  padding: 10px;
  width: 100%;
  box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
  > span {
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    overflow: hidden;
    box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3),
      inset 0 -2px 6px rgba(0, 0, 0, 0.4);
    transition: background-color 0.5s, width 0.5s;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-image: linear-gradient(
        -45deg,
        rgba(255, 255, 255, 0.2) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.2) 50%,
        rgba(255, 255, 255, 0.2) 75%,
        transparent 75%,
        transparent
      );
      z-index: 1;
      background-size: 50px 50px;
      animation: move 2s linear infinite;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      overflow: hidden;
    }
  }
  &__info-container {
    display: flex;
    justify-content: space-between;
    &--status {
      font-weight: bold;
    }
  }
}
</style>

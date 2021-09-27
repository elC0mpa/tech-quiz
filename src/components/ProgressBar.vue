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

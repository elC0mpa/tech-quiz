<template>
  <div
    class="difficulty-indicator"
    :class="{
      'is-hard': difficulty === 'Hard',
      'is-medium': difficulty === 'Medium',
      'is-easy': difficulty === 'Easy',
    }"
  >
    {{ difficulty }}
  </div>
</template>

<script>
export default {
  name: "DifficultyIndicator",
  props: {
    difficulty: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return { props };
  },
};
</script>

<style lang="scss" scoped>
.difficulty-indicator {
  padding: 0.5rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  &.is-hard {
    background-color: transparentize($color: $hard-color, $amount: 0.85);
    color: $hard-color;
  }
  &.is-medium {
    background-color: transparentize($color: $medium-color, $amount: 0.85);
    color: $medium-color;
  }
  &.is-easy {
    background-color: transparentize($color: $easy-color, $amount: 0.85);
    color: $easy-color;
  }
}
</style>

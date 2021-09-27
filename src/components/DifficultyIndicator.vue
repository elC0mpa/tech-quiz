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

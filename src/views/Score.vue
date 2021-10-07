<template>
  <div class="score">
    <score-header></score-header>
  </div>
</template>

<script>
import ScoreHeader from "../components/Score/ScoreSummary.vue";
export default {
  name: "Score",
  components: {
    ScoreHeader,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.score {
  height: 100vh;
  padding: 2rem $responsive-horizontal-padding;
  margin: 0 auto;
  background: $quiz-background-color;
}
</style>

<template>
  <div class="score">
    <score-header></score-header>
    <score-body></score-body>
  </div>
</template>

<script>
import ScoreHeader from "../components/Score/ScoreSummary.vue";
import ScoreBody from "../components/Score/ScoreBody.vue";
import { useStore } from "vuex";

export default {
  name: "Score",
  components: {
    ScoreHeader,
    ScoreBody,
  },
  setup() {
    const store = useStore();
    store.dispatch("calculateQuizScore");
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

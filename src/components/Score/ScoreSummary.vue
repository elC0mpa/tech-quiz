<template>
  <div class="score-summary">
    <progress-bar :width="quizScore" :color="progressBarColor">
      <div class="score-summary__progress-bar-content">
        <section-indicator></section-indicator>
      </div>
    </progress-bar>
    <div class="score-summary__info-container">
      <score-result-text></score-result-text>
      <score-result-cards></score-result-cards>
    </div>
  </div>
</template>

<script>
import SectionIndicator from "../Shared/SectionIndicator.vue";
import ProgressBar from "../Shared/ProgressBar.vue";
import ScoreResultText from "../Score/ScoreResulText.vue";
import ScoreResultCards from "../Score/ScoreResultCards.vue";
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  components: {
    SectionIndicator,
    ProgressBar,
    ScoreResultText,
    ScoreResultCards,
  },
  name: "ScoreSummary",
  setup() {
    const store = useStore();

    const quizScore = computed(() => {
      return store.getters.quizScore;
    });

    const progressBarColor = computed(() => {
      const color = quizScore.value < 70 ? "red" : "green";
      return color;
    });

    return { progressBarColor, quizScore };
  },
};
</script>

<style lang="scss" scoped>
.score-summary {
  &__info-container {
    margin-top: $gap;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
  }
}
</style>

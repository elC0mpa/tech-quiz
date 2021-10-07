<template>
  <div class="score-summary">
    <progress-bar :width="quizScore" :color="progressBarColor">
      <div class="score-summary__progress-bar-content">
        <section-indicator></section-indicator>
      </div>
    </progress-bar>
    <div class="score-summary__info-container">
      <score-result-text :quiz-score="quizScore"></score-result-text>
      <score-result-cards></score-result-cards>
    </div>
  </div>
</template>

<script>
import SectionIndicator from "../Shared/SectionIndicator.vue";
import ProgressBar from "../Shared/ProgressBar.vue";
import ScoreResultText from "../Score/ScoreResulText.vue";
import ScoreResultCards from "../Score/ScoreResultCards.vue";
import { computed, reactive, toRefs } from "@vue/reactivity";
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
    const state = reactive({
      totalQuestions: store.getters.totalQuestions,
      correctAnswers: store.getters.correctAnswersCount,
      quizScore:
        (store.getters.correctAnswersCount / store.getters.totalQuestions) *
        100,
    });

    const progressBarColor = computed(() => {
      const color =
        state.quizScore < 70
          ? "red"
          : state.quizScore < 90
          ? "#4756ca"
          : "#0fc9e7";
      return color;
    });

    return { ...toRefs(state), progressBarColor };
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

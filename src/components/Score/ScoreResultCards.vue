<template>
  <div
    class="score-result-cards"
    :class="{ 'is-passed-quizz': quizScore >= 70 }"
  >
    <div class="score-result-cards__score">
      <p class="score-result-cards__score-main">
        {{ quizScore.toFixed(1) }}
      </p>
      Score
    </div>
    <div class="score-result-cards__correct-answers">
      <p class="score-result-cards__correct-answers-main">
        {{ correctAnswers }} / {{ totalQuestions }}
      </p>
      Correct answers
    </div>
  </div>
</template>

<script>
import { computed, reactive, toRefs } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  name: "ScoreResultCards",
  setup() {
    const store = useStore();
    const state = reactive({
      totalQuestions: store.getters.totalQuestions,
      correctAnswers: store.getters.correctAnswersCount,
    });
    const quizScore = computed(() => {
      return store.getters.quizScore;
    });
    return { ...toRefs(state), quizScore };
  },
};
</script>

<style lang="scss" scoped>
.score-result-cards {
  background: transparentize($not-passed-color, 0.8);
  color: $not-passed-color;
  display: flex;
  align-items: center;
  border-radius: 2rem;
  &__score,
  &__correct-answers {
    display: flex;
    flex-direction: column;
    align-items: center;
    // color: white;
    padding: 2rem 3rem;
    font-size: large;
    min-width: 18rem;
  }
  &__score {
    border-right: 2px solid white;
    &-main {
      font-size: xxx-large;
      font-weight: bold;
    }
  }
  &__correct-answers {
    &-main {
      font-size: xx-large;
      font-weight: bold;
    }
  }
  &.is-passed-quizz {
    background: transparentize($passed-color, 0.8);
    color: $passed-color;
  }
}
</style>

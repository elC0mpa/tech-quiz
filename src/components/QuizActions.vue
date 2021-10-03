<template>
  <div class="quiz-actions">
    <button class="quiz-actions__skip" @click="skipQuestion">Skip</button>
    <button
      @click="nextQuestion"
      :disabled="!answerSelected"
      class="quiz-actions__next"
    >
      {{ actualQuestionCount === totalQuestions ? "Finish" : "Next" }}
    </button>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "QuizActions",
  setup() {
    const store = useStore();
    const router = useRouter();
    const answerSelected = computed(() => {
      return store.getters.selectedAnswer ? true : false;
    });
    const actualQuestionCount = computed(() => store.getters.cuestionCount + 1);
    const totalQuestions = computed(() => store.getters.totalQuestions);
    const nextQuestion = () => {
      store.dispatch("nextQuestion");
      if (actualQuestionCount.value - 1 === totalQuestions.value) {
        router.push({
          name: "Score",
        });
      }
    };
    const skipQuestion = () => {
      store.dispatch("skipQuestion");
    };
    return {
      answerSelected,
      nextQuestion,
      totalQuestions,
      actualQuestionCount,
      skipQuestion,
    };
  },
};
</script>

<style lang="scss" scoped>
.quiz-actions {
  margin-top: $gap;
  min-height: 6rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  > button {
    width: 12rem;
    height: 5rem;
    font-weight: bold;
    font-size: large;
    border-radius: 1rem;
    cursor: pointer;
    &:disabled {
      opacity: 0.4;
    }
  }
  &__next {
    background-color: $answer-item-background-selected;
    color: $answer-text-color-selected;
    border: 2px solid $answer-border-color-selected;
  }
  &__skip {
    background-color: $answer-item-background;
    color: $answer-text-color;
    border: 2px solid $answer-border-color;
  }
}
</style>

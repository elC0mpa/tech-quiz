<template>
  <div class="quiz-actions">
    <button class="quiz-actions__jump">Skip</button>
    <button
      @click="nextQuestion"
      :disabled="!answerSelected"
      class="quiz-actions__next"
    >
      Next
    </button>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  name: "QuizActions",
  setup() {
    const store = useStore();
    const answerSelected = computed(() => {
      return store.getters.selectedAnswer ? true : false;
    });
    const nextQuestion = () => {
      store.dispatch("nextQuestion");
    };
    return { answerSelected, nextQuestion };
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
    background-color: $answer-item-background;
    font-weight: bold;
    font-size: large;
    color: $answer-text-color;
    border: 2px solid $answer-border-color;
    border-radius: 1rem;
    cursor: pointer;
    &:disabled {
      opacity: 0.4;
    }
  }
}
</style>

<template>
  <div class="score-result-text">
    <p class="score-result-text__main-text">
      {{ mainText }}
    </p>
    <p class="score-result-text__secondary-text">
      {{ secondaryText[0] }}
      <span class="score-result-text__secondary-bold-text">{{
        secondaryText[1]
      }}</span>
      <br />
      {{ secondaryText[2] }}
    </p>
  </div>
</template>

<script>
import { computed, reactive } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  name: "ScoreResultText",
  setup() {
    const store = useStore();
    const state = reactive({
      totalQuestions: store.getters.totalQuestions,
      correctAnswers: store.getters.correctAnswersCount,
      quizScore:
        (store.getters.correctAnswersCount / store.getters.totalQuestions) *
        100,
    });
    const mainText = computed(() => {
      const text =
        state.quizScore < 70
          ? "Don't give up!! 📖"
          : state.quizScore < 90
          ? "Well done 👍"
          : "Excellent 💡";
      return text;
    });
    const secondaryText = computed(() => {
      const array =
        state.quizScore < 70
          ? [
              "You need at least",
              "70 points to pass the test.",
              "Just keep working!!",
            ]
          : state.quizScore < 90
          ? [
              "Don´t relax,",
              "if you get more than 90 points",
              "you could be considered an expert in this topic",
            ]
          : [
              "You have worked so hard.",
              "Now start helping others,",
              "what are you waiting for?",
            ];
      return array;
    });
    return { mainText, secondaryText };
  },
};
</script>

<style lang="scss" scoped>
.score-result-text {
  &__main-text {
    font-size: xxx-large;
    font-weight: bold;
  }
  &__secondary-text {
    font-size: x-large;
    margin-top: calc(#{$gap} / 2);
  }
  &__secondary-bold-text {
    font-weight: bold;
  }
}
</style>

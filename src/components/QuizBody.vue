<template>
  <div class="quiz-body" v-if="actualQuestion">
    <p class="quiz-body__question">
      {{ actualQuestion.question }}
    </p>
    <answer-item
      v-for="(answer, index) in answers"
      :key="index"
      :answer="answer"
      :number="index + 1"
      @click="answerSelected(answer)"
    ></answer-item>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import AnswerItem from "./AnswerItem.vue";
export default {
  name: "QuizBody",
  components: {
    AnswerItem,
  },
  setup() {
    const store = useStore();
    const actualQuestion = computed(() => store.getters.actualQuestion);
    const answers = computed(() => {
      const answers = [];
      Object.keys(actualQuestion.value.answers).forEach((label) => {
        if (actualQuestion.value.answers[label]) {
          answers.push({
            label,
            answer: actualQuestion.value.answers[label],
          });
        }
      });
      return answers;
    });
    const answerSelected = (answer) => {
      store.commit("setSelectedAnswer", answer);
    };
    return { actualQuestion, answers, answerSelected };
  },
};
</script>

<style lang="scss" scoped>
.quiz-body {
  margin-top: $gap;
  &__question {
    font-size: x-large;
    font-weight: bold;
    color: $question-color;
  }
}
</style>

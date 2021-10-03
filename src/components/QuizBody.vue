<template>
  <div class="quiz-body">
    <p v-if="!isLoading" class="quiz-body__question">
      {{ actualQuestion.question }}
    </p>
    <content-loader v-else viewBox="0 0 100 3" secondaryColor="#4756ca">
      <rect x="0" y="0" width="100%" height="100%" />
    </content-loader>
    <div v-if="!isLoading">
      <answer-item
        v-for="(answer, index) in answers"
        :key="index"
        :answer="answer"
        :number="index + 1"
        @click="answerSelected(answer)"
      ></answer-item>
    </div>
    <div v-else class="quiz-body__placeholders-container">
      <content-loader viewBox="0 0 100 3" secondaryColor="#3186b2">
        <rect x="0" y="0" width="100%" height="100%" />
      </content-loader>
      <content-loader viewBox="0 0 100 3" secondaryColor="#3186b2">
        <rect x="0" y="0" width="100%" height="100%" />
      </content-loader>
      <content-loader viewBox="0 0 100 3" secondaryColor="#3186b2">
        <rect x="0" y="0" width="100%" height="100%" />
      </content-loader>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import AnswerItem from "./AnswerItem.vue";
import { ContentLoader } from "vue-content-loader";
export default {
  name: "QuizBody",
  components: {
    AnswerItem,
    ContentLoader,
  },
  setup() {
    const store = useStore();
    const actualQuestion = computed(() => store.getters.actualQuestion);
    const isLoading = computed(() => store.getters.isLoadingQuestions);
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
      return isLoading.value ? [] : answers;
    });
    const answerSelected = (answer) => {
      store.commit("setSelectedAnswer", answer);
    };
    return { actualQuestion, answers, answerSelected, isLoading };
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
  &__placeholders-container {
    > * {
      margin-top: $gap;
    }
  }
}
</style>

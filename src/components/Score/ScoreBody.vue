<template>
  <div class="score-body">
    <div v-if="!isLoading">
      <question-answer
        v-for="(question, index) in questions"
        :question="question"
        :key="index"
      ></question-answer>
    </div>
    <div v-else class="score-body__placeholders-container">
      <content-loader viewBox="0 0 100 3" :secondaryColor="placeholdersColor">
        <rect x="0" y="0" width="100%" height="100%" />
      </content-loader>
      <content-loader viewBox="0 0 100 3" :secondaryColor="placeholdersColor">
        <rect x="0" y="0" width="100%" height="100%" />
      </content-loader>
      <content-loader viewBox="0 0 100 3" :secondaryColor="placeholdersColor">
        <rect x="0" y="0" width="100%" height="100%" />
      </content-loader>
      <content-loader viewBox="0 0 100 3" :secondaryColor="placeholdersColor">
        <rect x="0" y="0" width="100%" height="100%" />
      </content-loader>
      <content-loader viewBox="0 0 100 3" :secondaryColor="placeholdersColor">
        <rect x="0" y="0" width="100%" height="100%" />
      </content-loader>
      <content-loader viewBox="0 0 100 3" :secondaryColor="placeholdersColor">
        <rect x="0" y="0" width="100%" height="100%" />
      </content-loader>
    </div>
  </div>
</template>

<script>
import { computed, reactive, toRefs } from "@vue/reactivity";
import { useStore } from "vuex";
import QuestionAnswer from "./QuestionAnswer.vue";
import { ContentLoader } from "vue-content-loader";
export default {
  name: "ScoreBody",
  components: {
    QuestionAnswer,
    ContentLoader,
  },
  setup() {
    const store = useStore();
    const state = reactive({
      questions: store.getters.questions,
    });
    const isLoading = computed(() => {
      return store.getters.isLoading;
    });
    const quizScore = computed(() => {
      return store.getters.quizScore;
    });
    const placeholdersColor = computed(() => {
      return quizScore.value < 70 ? "red" : "green";
    });
    return { ...toRefs(state), isLoading, placeholdersColor };
  },
};
</script>

<style lang="scss" scoped>
.score-body {
  padding-bottom: $gap;
  &__placeholders-container {
    > * {
      margin-top: $gap;
    }
  }
}
</style>

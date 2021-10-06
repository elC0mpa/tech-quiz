<template>
  <div class="quiz">
    <quiz-header></quiz-header>
    <quiz-body></quiz-body>
    <quiz-actions></quiz-actions>
  </div>
</template>

<script>
import { useStore } from "vuex";
import QuizHeader from "../components/QuizHeader.vue";
import QuizBody from "../components/QuizBody.vue";
import QuizActions from "../components/QuizActions.vue";

export default {
  name: "Quiz",
  components: {
    QuizHeader,
    QuizBody,
    QuizActions,
  },
  setup() {
    const store = useStore();
    store.dispatch("getQuestions");
    return {};
  },
};
</script>

<style lang="scss" scoped>
.quiz {
  height: 100vh;
  padding: 2rem $responsive-horizontal-padding;
  margin: 0 auto;
  background: $quiz-background-color;
}
</style>

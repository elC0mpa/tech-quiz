<template>
  <div class="quiz">
    <quiz-header v-if="topic"></quiz-header>
    <quiz-body v-if="topic"></quiz-body>
    <quiz-actions v-if="topic"></quiz-actions>
  </div>
</template>

<script>
import { useStore } from "vuex";
import QuizHeader from "../components/Quiz/QuizHeader.vue";
import QuizBody from "../components/Quiz/QuizBody.vue";
import QuizActions from "../components/Quiz/QuizActions.vue";
import { useRouter } from "vue-router";

export default {
  name: "Quiz",
  components: {
    QuizHeader,
    QuizBody,
    QuizActions,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const topic = store.getters.topic;
    if (!topic) {
      router.push({
        name: "Home",
      });
    }
    store.dispatch("getQuestions");
    return { topic };
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

<template>
  <div class="quiz">
    <quiz-header></quiz-header>
    <quiz-body></quiz-body>
    <quiz-actions></quiz-actions>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
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
    const state = reactive({
      isLoading: true,
    });
    store.dispatch("getQuestions").then(() => {
      state.isLoading = false;
    });
    return { ...toRefs(state) };
  },
};
</script>

<style lang="scss" scoped>
.quiz {
  height: 100vh;
  padding: 2rem 15vw;
  margin: 0 auto;
  background: $quiz-background-color;
}
</style>

<template>
  <div class="quiz">
    <quiz-header></quiz-header>
    <quiz-body></quiz-body>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import { useStore } from "vuex";
import QuizHeader from "../components/QuizHeader.vue";
import QuizBody from "../components/QuizBody.vue";

export default {
  name: "Quiz",
  components: {
    QuizHeader,
    QuizBody,
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
  width: 80vw;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
</style>

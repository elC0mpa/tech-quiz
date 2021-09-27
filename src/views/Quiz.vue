<template>
  <div class="quiz">
    <quiz-header></quiz-header>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import { useStore } from "vuex";
import QuizHeader from "../components/QuizHeader.vue";

export default {
  name: "Quiz",
  components: {
    QuizHeader,
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

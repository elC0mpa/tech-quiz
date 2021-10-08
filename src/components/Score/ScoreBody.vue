<template>
  <div class="score-body">
    <question-answer
      v-for="(question, index) in questions"
      :question="question"
      :key="index"
    ></question-answer>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import { useStore } from "vuex";
import QuestionAnswer from "./QuestionAnswer.vue";
export default {
  name: "ScoreBody",
  components: {
    QuestionAnswer,
  },
  setup() {
    const store = useStore();
    const state = reactive({
      questions: store.getters.questions,
    });
    return { ...toRefs(state) };
  },
};
</script>

<style lang="scss" scoped></style>

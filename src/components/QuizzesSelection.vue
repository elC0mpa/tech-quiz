<template>
  <div class="quizzes-selection">
    <p class="quizzes-selection__main-text">Select a topic</p>
    <div class="quizzes-selection__container">
      <card-topic
        v-for="(quiz, index) in quizzes"
        :key="index"
        :quiz="quiz"
      ></card-topic>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import CardTopic from "./CardTopic.vue";
export default {
  name: "QuizzesSelection",
  components: {
    CardTopic,
  },
  setup() {
    const data = reactive({
      quizzes: [
        {
          topic: "Linux",
        },
        // {
        //   topic: "DevOps",
        // },
        {
          topic: "JavaScript",
        },
        {
          topic: "PHP",
        },
        // {
        //   topic: "Bash",
        // },
        {
          topic: "HTML",
        },
        {
          topic: "Docker",
        },
        {
          topic: "Kubernetes",
        },
        {
          topic: "WordPress",
        },
        {
          topic: "Laravel",
        },
      ],
    });
    return { ...toRefs(data) };
  },
};
</script>

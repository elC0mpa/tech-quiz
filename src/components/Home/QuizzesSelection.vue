<template>
  <div class="quizzes-selection">
    <p class="quizzes-selection__main-text">Select a topic</p>
    <div class="quizzes-selection__container">
      <card-topic
        v-for="(quiz, index) in quizzes"
        :key="index"
        :quiz="quiz"
        @click="goToQuiz(quiz)"
      ></card-topic>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
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
          backgroundImage: "linux-background.jpg",
        },
        {
          topic: "DevOps",
          backgroundImage: "devops-background.jpg",
        },
        {
          topic: "Bash",
          backgroundImage: "bash-background.jpg",
        },
        {
          topic: "JavaScript",
          backgroundImage: "javascript-background.jpg",
        },
        {
          topic: "PHP",
          backgroundImage: "php-background.jpeg",
        },
        {
          topic: "HTML",
          backgroundImage: "html5-background.png",
        },
        {
          topic: "Docker",
          backgroundImage: "docker-background.png",
        },
        {
          topic: "Kubernetes",
          backgroundImage: "kubernetes-background.png",
        },
        {
          topic: "WordPress",
          backgroundImage: "wordpress-background.jpeg",
        },
        {
          topic: "Laravel",
          backgroundImage: "laravel-background.jpg",
        },
      ],
    });
    const store = useStore();
    const router = useRouter();
    const goToQuiz = (quiz) => {
      store.commit("setTopic", quiz.topic);
      router.push({
        name: "Quiz",
      });
    };
    return { ...toRefs(data), goToQuiz };
  },
};
</script>

<style lang="scss" scoped>
.quizzes-selection {
  width: 100vw;
  margin-top: $gap;
  margin-bottom: $gap;
  &__main-text {
    font-size: xxx-large;
    text-align: center;
    color: black;
  }
  &__container {
    width: 80%;
    margin: $gap auto 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: $gap;
    @include responsive(large-bp) {
      width: 90%;
    }
    @include responsive(medium-bp) {
      width: 95%;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      column-gap: 0;
    }
  }
}
</style>

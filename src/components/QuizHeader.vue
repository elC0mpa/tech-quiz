<template>
  <div class="quiz-header">
    <progress-bar :width="20" color="orangered">
      <div class="quiz-header__progress-bar-content">
        <div>
          <img
            class="quiz-header__svg"
            :src="require(`../assets/svgs/${topic.toLowerCase()}.svg`)"
          />
          <span class="quiz-header__info">{{ topic }}</span>
        </div>
        <div>
          <span class="quiz-header__info"
            >{{ actualQuestionCount }} of {{ totalQuestions }}</span
          >
          <difficulty-indicator
            v-if="actualQuestion"
            :difficulty="actualQuestion.difficulty"
          ></difficulty-indicator>
        </div>
      </div>
    </progress-bar>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import ProgressBar from "./ProgressBar.vue";
import DifficultyIndicator from "./DifficultyIndicator.vue";
export default {
  name: "QuizHeader",
  components: {
    ProgressBar,
    DifficultyIndicator,
  },
  setup() {
    const store = useStore();
    const topic = computed(() => store.getters.topic);
    const actualQuestionCount = computed(() => store.getters.cuestionCount + 1);
    const actualQuestion = computed(() => store.getters.actualQuestion);
    const totalQuestions = computed(() => store.getters.totalQuestions);
    return { topic, actualQuestionCount, totalQuestions, actualQuestion };
  },
};
</script>

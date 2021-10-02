<template>
  <div class="quiz-header">
    <progress-bar
      v-if="actualQuestion"
      :width="quizPercentage"
      :color="progressBarColor"
    >
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
    const progressBarColor = computed(() => {
      const color =
        actualQuestion.value.difficulty === "Hard"
          ? "#4756ca"
          : actualQuestion.value.difficulty === "Medium"
          ? "#3186b2"
          : "#0fc9e7";
      return color;
    });
    const quizPercentage = computed(() => {
      const percentage =
        (actualQuestionCount.value * 100) / totalQuestions.value;
      return percentage;
    });
    return {
      topic,
      actualQuestionCount,
      totalQuestions,
      actualQuestion,
      progressBarColor,
      quizPercentage,
    };
  },
};
</script>

<style lang="scss" scoped>
.quiz-header {
  &__progress-bar-content {
    display: flex;
    justify-content: space-between;
    > div {
      display: flex;
      align-items: flex-end;
      margin-bottom: 0.5rem;
      :first-child {
        margin-right: 1rem;
      }
    }
  }
  &__info {
    color: $quiz-header-info-color;
    font-size: 2.5rem;
  }
  &__svg {
    height: 3.5rem;
  }
}
</style>

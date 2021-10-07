<template>
  <div class="quiz-header">
    <progress-bar :width="quizPercentage" :color="progressBarColor">
      <div class="quiz-header__progress-bar-content">
        <div>
          <img
            class="quiz-header__svg"
            :src="require(`../../assets/svgs/${topic.toLowerCase()}.svg`)"
          />
          <span class="quiz-header__info">{{ topic }}</span>
        </div>
        <div>
          <span v-if="!isLoading" class="quiz-header__info"
            >{{ actualQuestionCount }} of {{ totalQuestions }}</span
          >
          <difficulty-indicator
            v-if="!isLoading"
            :difficulty="actualQuestion.difficulty"
          ></difficulty-indicator>
          <content-loader
            v-if="isLoading"
            width="150"
            height="30"
            secondaryColor="#3186b2"
          >
            <rect x="0" y="0" width="150" height="30" />
          </content-loader>
        </div>
      </div>
    </progress-bar>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import ProgressBar from "../ProgressBar.vue";
import DifficultyIndicator from "./DifficultyIndicator.vue";
import { ContentLoader } from "vue-content-loader";
export default {
  name: "QuizHeader",
  components: {
    ProgressBar,
    DifficultyIndicator,
    ContentLoader,
  },
  setup() {
    const store = useStore();
    const topic = computed(() => store.getters.topic);
    const actualQuestionCount = computed(() => store.getters.cuestionCount + 1);
    const actualQuestion = computed(() => store.getters.actualQuestion);
    const totalQuestions = computed(() => store.getters.totalQuestions);
    const isLoading = computed(() => store.getters.isLoadingQuestions);
    const progressBarColor = computed(() => {
      const color = isLoading.value
        ? "gray"
        : actualQuestion.value.difficulty === "Hard"
        ? "#4756ca"
        : actualQuestion.value.difficulty === "Medium"
        ? "#3186b2"
        : "#0fc9e7";
      return color;
    });
    const quizPercentage = computed(() => {
      const percentage = isLoading.value
        ? 0
        : (actualQuestionCount.value * 100) / totalQuestions.value;
      return percentage;
    });
    return {
      topic,
      actualQuestionCount,
      totalQuestions,
      actualQuestion,
      progressBarColor,
      quizPercentage,
      isLoading,
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

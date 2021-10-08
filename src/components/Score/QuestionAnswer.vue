<template>
  <div class="question-answer" :class="{ 'is-correct': question.is_correct }">
    <p class="question-answer__question">{{ question.question }}</p>
    <div class="question-answer__answer-container">
      <div class="question-answer__answer">
        {{ question.answers[question.selected_answer] }}
      </div>
      <div class="question-answer__status">
        <img
          :src="
            require(`../../assets/svgs/${
              question.is_correct ? 'correct' : 'incorrect'
            }.svg`)
          "
        />
      </div>
    </div>
  </div>
</template>

<script>
// import DifficultyIndicator from "../Shared/DifficultyIndicator.vue";
export default {
  name: "QuestionAnswer",
  components: {
    // DifficultyIndicator,
  },
  props: {
    question: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    return { props };
  },
};
</script>

<style lang="scss" scoped>
.question-answer {
  margin-top: $gap;
  &__question {
    font-size: x-large;
    font-weight: bold;
    color: $question-color;
  }
  &__answer-container {
    @include answer-item-styles;
    justify-content: space-between;
  }
  &__answer {
    padding: 0.5rem 2rem;
  }
  &__status {
    align-self: stretch;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    border-left: 2px solid $answer-border-color;
    > img {
      height: 2rem;
    }
  }
}
</style>

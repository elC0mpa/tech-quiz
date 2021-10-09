<template>
  <div class="question-answer">
    <p
      class="question-answer__question"
      :class="{ 'is-correct': question.is_correct }"
    >
      {{ question.question }}
    </p>
    <div
      class="question-answer__answer-container"
      :class="{ 'is-correct': question.is_correct }"
    >
      <div class="question-answer__answer">
        {{ question.answers[question.selected_answer] }}
      </div>
      <div
        class="question-answer__status"
        :class="{ 'is-correct': question.is_correct }"
      >
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
    color: $not-passed-color;
    &.is-correct {
      color: $passed-color;
    }
  }
  &__answer-container {
    @include answer-item-styles;
    background: transparentize($not-passed-color, 0.8);
    color: $not-passed-color;
    border: 2px solid $not-passed-color;
    justify-content: space-between;
    &.is-correct {
      color: $passed-color;
      border: 2px solid $passed-color;
      background: transparentize($passed-color, 0.8);
    }
  }
  &__answer {
    padding: 0.5rem 2rem;
  }
  &__status {
    align-self: stretch;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    border-left: 2px solid $not-passed-color;
    > img {
      height: 2rem;
    }
    &.is-correct {
      border-left: 2px solid $passed-color;
    }
  }
}
</style>

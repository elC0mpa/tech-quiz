<template>
  <div class="answer-item" :class="{ 'is-selected': isSelected }">
    <div class="answer-item__number">{{ number }}</div>
    <div class="answer-item__answer">{{ answer.answer }}</div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  name: "AnswerItem",
  props: {
    answer: {
      required: true,
      type: Object,
    },
    number: {
      required: true,
      type: Number,
    },
  },
  setup(props) {
    const store = useStore();
    const isSelected = computed(
      () => store.getters.selectedAnswer?.answer === props.answer.answer
    );
    return { props, isSelected };
  },
};
</script>

<style lang="scss" scoped>
.answer-item {
  @include answer-item-styles;
  margin-top: $gap;
  cursor: pointer;
  &__number {
    border-right: 2px solid $answer-border-color;
    align-self: stretch;
    justify-content: center;
    display: flex;
    align-items: center;
    min-width: 3rem;
  }
  &__answer {
    padding: 0.5rem 2rem;
  }
  &.is-selected {
    background-color: $answer-item-background-selected;
    color: $answer-text-color-selected;
    border: 2px solid $answer-border-color-selected;
  }
}
</style>

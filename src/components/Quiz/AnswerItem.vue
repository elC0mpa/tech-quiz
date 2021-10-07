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
  background-color: $answer-item-background;
  color: $answer-text-color;
  display: flex;
  align-items: center;
  font-size: large;
  font-weight: bold;
  border: 2px solid $answer-border-color;
  min-height: 4rem;
  margin-top: $gap;
  border-radius: 1rem;
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
    margin-left: 2rem;
  }
  &.is-selected {
    background-color: $answer-item-background-selected;
    color: $answer-text-color-selected;
    border: 2px solid $answer-border-color-selected;
  }
}
</style>

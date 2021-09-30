<template>
  <div
    class="card-topic"
    :style="`background-image: linear-gradient(gray, gray), url(${require('../assets/images/' +
      quiz.backgroundImage)})`"
  >
    <img
      class="card-topic__svg"
      :src="require(`../assets/svgs/${quiz.topic.toLowerCase()}.svg`)"
    />
    <p class="card-topic__text">
      {{ quiz.topic }}
    </p>
  </div>
</template>

<script>
// import { computed } from "vue";
export default {
  name: "CardTopic",
  props: {
    quiz: {
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
.card-topic {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 300px;
  cursor: pointer;
  background-position: center;
  background-blend-mode: darken;
  background-repeat: no-repeat;
  background-size: cover;
  &__svg {
    width: 4.8rem;
  }
  &__text {
    font-size: 2.5rem;
    color: $topic-text-color;
  }
}
</style>

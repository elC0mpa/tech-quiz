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

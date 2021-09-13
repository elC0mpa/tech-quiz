<template>
  <div class="card-topic">
    <img
      class="card-topic__svg"
      :src="require(`../assets/svgs/${quiz.topic.toLowerCase()}.svg`)"
    />
    <p class="card-topic__text">{{ quiz.topic }}</p>
  </div>
</template>

<script>
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

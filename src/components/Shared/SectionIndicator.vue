<template>
  <span class="section_indicator" :class="{ 'is-in-score': isInScore }">
    <img
      class="section_indicator__svg"
      :src="require(`../../assets/svgs/home.svg`)"
      @click="goHome"
    />
    <img
      class="section_indicator__svg"
      :src="require(`../../assets/svgs/${topic.toLowerCase()}.svg`)"
    />
    <span class="section_indicator__info">{{ topic }}</span>
  </span>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "SectionIndicator",
  props: {
    isInScore: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const topic = computed(() => store.getters.topic);
    const goHome = () => {
      store.dispatch("resetState");
      router.push({
        name: "Home",
      });
    };
    return { topic, props, goHome };
  },
};
</script>

<style lang="scss" scoped>
.section_indicator {
  display: flex;
  align-items: flex-end;
  margin-bottom: 0.5rem;
  color: $quiz-header-info-color;
  &__info {
    font-size: 2.5rem;
    margin-left: 1rem;
  }
  &__svg {
    height: 3.5rem;
    &:first-child {
      margin-right: 1rem;
      cursor: pointer;
    }
  }
  &.is-in-score {
    color: black;
  }
}
</style>

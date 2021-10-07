<template>
  <span class="section_indicator">
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
export default {
  name: "SectionIndicator",
  setup() {
    const store = useStore();
    const topic = computed(() => store.getters.topic);
    return { topic };
  },
};
</script>

<style lang="scss" scoped>
.section_indicator {
  display: flex;
  align-items: flex-end;
  margin-bottom: 0.5rem;
  &__info {
    color: $quiz-header-info-color;
    font-size: 2.5rem;
    margin-left: 1rem;
  }
  &__svg {
    height: 3.5rem;
  }
}
</style>

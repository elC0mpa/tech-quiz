<template>
  <div class="section_indicator">
    <img
      class="section_indicator__svg"
      :src="require(`../../assets/svgs/${topic.toLowerCase()}.svg`)"
    />
    <span class="section_indicator__info">{{ topic }}</span>
  </div>
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
  &__info {
    color: $quiz-header-info-color;
    font-size: 2.5rem;
  }
  &__svg {
    height: 3.5rem;
  }
}
</style>

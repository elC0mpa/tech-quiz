<template>
  <div class="site-presentation">
    <div class="site-presentation__header-container">
      <h1 class="site-presentation__header">
        Welcome To Tech Quiz!!
        <br />
        <span class="site-presentation__secondary-info">
          Take a quiz and test your knowledge about any tech topic!!!
        </span>
      </h1>
      <div class="site-presentation__button-container">
        <button
          class="site-presentation__button basic-button"
          @click="scrollToQuizzesSection"
        >
          Take a quiz
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
export default {
  name: "SitePresentation",
  setup() {
    const data = reactive({});
    const scrollToQuizzesSection = () => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    };
    return { ...toRefs(data), scrollToQuizzesSection };
  },
};
</script>

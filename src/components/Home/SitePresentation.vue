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
        <real-button
          text="Take a quiz"
          @click="scrollToQuizzesSection"
        ></real-button>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import RealButton from "../Shared/RealButton.vue";
export default {
  name: "SitePresentation",
  components: {
    RealButton,
  },
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

<style lang="scss" scoped>
.site-presentation {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(gray, gray),
    url("../../assets/images/7.jpg");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  background-blend-mode: darken;
  position: relative;
  &__header-container {
    top: 30%;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    width: 100%;
    max-width: 80rem;
  }
  &__header {
    // background-color: transparentize($color: black, $amount: 0.2);
    // background-clip: text;
    color: white;
    font-size: 5rem;
    letter-spacing: 0.5rem;
    text-align: center;
  }
  &__secondary-info {
    font-size: xx-large;
  }
  &__button-container {
    margin-top: $gap;
    display: flex;
    justify-content: center;
  }
}
</style>

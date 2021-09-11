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
    </div>
  </div>
</template>
// :src="require(`../../assets/imgs/${avatar.filename}`)"
<script>
import { reactive, toRefs } from "@vue/reactivity";
export default {
  name: "SitePresentation",
  setup() {
    const data = reactive({});
    return { ...toRefs(data) };
  },
};
</script>

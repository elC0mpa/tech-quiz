<template>
  <div class="quiz"></div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
export default {
  name: "Quiz",
  setup() {
    const data = reactive({
      isLoading: true,
    });
    return { ...toRefs(data) };
  },
};
</script>

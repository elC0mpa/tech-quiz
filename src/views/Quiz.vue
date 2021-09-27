<template>
  <div class="quiz">{{ route.params }}</div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import { useRoute } from "vue-router";
export default {
  name: "Quiz",
  setup() {
    const route = useRoute();
    const data = reactive({
      isLoading: true,
    });
    return { route, ...toRefs(data) };
  },
};
</script>

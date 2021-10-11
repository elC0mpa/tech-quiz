<template>
  <site-presentation></site-presentation>
  <quizzes-selection></quizzes-selection>
</template>

<script>
import SitePresentation from "@/components/Home/SitePresentation";
import QuizzesSelection from "@/components/Home/QuizzesSelection";
import { useStore } from "vuex";

export default {
  name: "Home",
  components: { SitePresentation, QuizzesSelection },
  setup() {
    const store = useStore();
    store.dispatch("resetState");
  },
};
</script>

<template>
  <site-presentation></site-presentation>
  <quizzes-selection></quizzes-selection>
</template>

<script>
import SitePresentation from "@/components/SitePresentation";
import QuizzesSelection from "@/components/QuizzesSelection";
export default {
  name: "Home",
  components: { SitePresentation, QuizzesSelection },
};
</script>

<template>
  <site-presentation></site-presentation>
  <quizzes-selection></quizzes-selection>
</template>

<script>
import SitePresentation from "@/components/Home/SitePresentation";
import QuizzesSelection from "@/components/Home/QuizzesSelection";
export default {
  name: "Home",
  components: { SitePresentation, QuizzesSelection },
};
</script>

import Home from "../views/Home.vue";
import Quiz from "../views/Quiz.vue";
import Score from "../views/Score.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/quiz/",
    name: "Quiz",
    component: Quiz,
  },
  {
    path: "/score/",
    name: "Score",
    component: Score,
  },
];

export { routes as default };

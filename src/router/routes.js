import Home from "../views/Home.vue";
import Quiz from "../views/Quiz.vue";

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
];

export { routes as default };

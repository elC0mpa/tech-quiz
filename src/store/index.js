import { createStore } from "vuex";
import axios from "../config/axios";

export default createStore({
  state: {
    TOPIC: "",
    QUESTIONS: [],
    ACTUAL_QUESTION: 0,
    TOTAL_QUESTIONS: 0,
    SELECTED_ANSWER: null,
    IS_LOADING: false,
    CORRECT_ANSWERS_COUNT: 0,
    TIMER_ID: null,
    ANIMATION: {
      score: 0,
    },
  },
  mutations: {
    setTopic(state, value) {
      state.TOPIC = value;
    },
    setQuestions(state, value) {
      state.QUESTIONS = [...value];
    },
    setTotalQuestions(state, value) {
      state.TOTAL_QUESTIONS = value;
    },
    setSelectedAnswer(state, value) {
      state.SELECTED_ANSWER = value;
    },
    setActualQuestion(state, value) {
      state.ACTUAL_QUESTION = value;
    },
    setIsLoading(state, value) {
      state.IS_LOADING = value;
    },
    setCorrectAnswersCount(state, value) {
      state.CORRECT_ANSWERS_COUNT = value;
    },
    setQuizScore(state, value) {
      state.ANIMATION.score = value;
    },
    setTimerId(state, value) {
      state.TIMER_ID = value;
    },
  },
  actions: {
    getQuestions(state) {
      // eslint-disable-next-line no-async-promise-executor
      return new Promise(async (resolve, reject) => {
        try {
          state.commit("setIsLoading", true);
          const { data } = await axios.get(
            `questions?limit=15&tags=${state.state.TOPIC.toLowerCase()}`
          );
          state.commit("setQuestions", data);
          state.commit("setTotalQuestions", data.length);
          state.commit("setIsLoading", false);
          resolve(data);
        } catch (error) {
          reject(error);
        }
      });
    },
    nextQuestion(state) {
      const actualQuestion = state.getters.actualQuestion;
      const selectedAnswer = state.getters.selectedAnswer.label;
      actualQuestion.selected_answer = selectedAnswer;
      if (
        actualQuestion.correct_answers[`${selectedAnswer}_correct`] === "true"
      ) {
        actualQuestion.is_correct = true;
        state.commit(
          "setCorrectAnswersCount",
          state.getters.correctAnswersCount + 1
        );
      }
      state.state.QUESTIONS[state.ACTUAL_QUESTION] = actualQuestion;
      state.commit("setSelectedAnswer", null);
      state.getters.cuestionCount + 1 !== state.getters.totalQuestions &&
        state.commit("setActualQuestion", state.getters.cuestionCount + 1);
    },
    skipQuestion(state) {
      const actualQuestion = state.getters.actualQuestion;
      const questions = state.getters.questions;
      questions.splice(state.state.ACTUAL_QUESTION, 1);
      questions.push(actualQuestion);
      state.commit("setQuestions", questions);
    },
    startScoreAnimation({ commit, getters }) {
      commit("setIsLoading", true);
      commit(
        "setTimerId",
        setInterval(() => {
          const quizScore =
            (getters.correctAnswersCount / getters.totalQuestions) * 100;
          commit("setQuizScore", getters.quizScore + 1);
          if (getters.quizScore >= quizScore) {
            commit("setQuizScore", quizScore);
            clearInterval(getters.timerId);
            commit("setTimerId", null);
            commit("setIsLoading", false);
          }
        }, 50)
      );
    },
    resetState({ commit }) {
      commit("setTopic", "");
      commit("setQuestions", []);
      commit("setAnswers", []);
      commit("setActualQuestion", 0);
      commit("setSelectedAnswer", null);
      commit("setIsLoading", false);
      commit("setIsLoading", false);
      commit("setCorrectAnswersCount", 0);
      commit("setTimerId", null);
      commit("setQuizScore", 0);
    },
  },
  getters: {
    questions(state) {
      return state.QUESTIONS;
    },
    actualQuestion(state) {
      return state.QUESTIONS[state.ACTUAL_QUESTION];
    },
    topic(state) {
      return state.TOPIC;
    },
    totalQuestions(state) {
      return state.TOTAL_QUESTIONS;
    },
    cuestionCount(state) {
      return state.ACTUAL_QUESTION;
    },
    selectedAnswer(state) {
      return state.SELECTED_ANSWER;
    },
    isLoading(state) {
      return state.IS_LOADING;
    },
    correctAnswersCount(state) {
      return state.CORRECT_ANSWERS_COUNT;
    },
    quizScore(state) {
      return state.ANIMATION.score;
    },
    timerId(state) {
      return state.TIMER_ID;
    },
  },
});

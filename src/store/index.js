import { createStore } from "vuex";
import axios from "../config/axios";

export default createStore({
  state: {
    TOPIC: "",
    QUESTIONS: [],
    ANSWERS: [],
    ACTUAL_QUESTION: 0,
    TOTAL_QUESTIONS: 0,
    SELECTED_ANSWER: null,
    IS_LOADING_QUESTIONS: true,
    CORRECT_ANSWERS_COUNT: 0,
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
    setIsLoadingQuestions(state, value) {
      state.IS_LOADING_QUESTIONS = value;
    },
    setCorrectAnswersCount(state, value) {
      state.CORRECT_ANSWERS_COUNT = value;
    },
  },
  actions: {
    getQuestions(state) {
      // eslint-disable-next-line no-async-promise-executor
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await axios.get(
            `questions?limit=15&tags=${state.state.TOPIC.toLowerCase()}`
          );
          state.commit("setQuestions", data);
          state.commit("setTotalQuestions", data.length);
          state.commit("setIsLoadingQuestions", false);
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
    isLoadingQuestions(state) {
      return state.IS_LOADING_QUESTIONS;
    },
    correctAnswersCount(state) {
      return state.CORRECT_ANSWERS_COUNT;
    },
  },
});

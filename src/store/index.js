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
          resolve(data);
        } catch (error) {
          reject(error);
        }
      });
    },
    nextQuestion(state) {
      const id = state.getters.actualQuestion.id;
      state.state.ANSWERS.push({
        id,
        ...state.getters.selectedAnswer,
      });
      console.log(state.state.ANSWERS);
      state.commit("setSelectedAnswer", null);
      state.commit("setActualQuestion", state.getters.cuestionCount + 1);
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
  },
});

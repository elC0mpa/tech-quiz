import { createStore } from "vuex";
import axios from "../config/axios";

export default createStore({
  state: {
    TOPIC: "",
    QUESTIONS: [],
    ANSWERS: [],
    ACTUAL_QUESTION: 0,
    TOTAL_QUESTIONS: 0,
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
    addAnswer(state, answer) {
      state.ANSWERS.push(answer);
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
  },
});

import { createStore } from "vuex";
import axios from "../config/axios";

export default createStore({
  state: {
    TOPIC: "",
    QUESTIONS: [],
    ANSWERS: [],
    ACTUAL_QUESTION: 0,
  },
  mutations: {
    setTopic(state, value) {
      state.TOPIC = value;
    },
    setQuestions(state, value) {
      state.QUESTIONS = [...value];
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
  },
});

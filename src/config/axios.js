import axios from "axios";
const defaultOptions = {
  baseURL: "https://quizapi.io/api/v1/",
  headers: {
    "X-Api-Key": process.env.VUE_APP_QUIZ_API_TOKEN,
  },
};
const instance = axios.create(defaultOptions);
export { instance as default };

import axios from "axios";

const BASE_URL = process.env.BACKEND_URL ?? "http://localhost:4000/api";

export const getUser = id => {
  const requestString = `${BASE_URL}/users/${id}`;
  return axios
    .get(requestString, {
      headers: {
        "Content-Type": "application/JSON"
      }
    })
    .catch(error => {
      return {
        type: "GET_USER_FAIL",
        error
      };
    });
};

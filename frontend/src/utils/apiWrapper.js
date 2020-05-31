import axios from "axios";

const BASE_URL =
  process.env.REACT_APP_BACKEND_URL ?? "http://localhost:4000/api";

export const getUser = userId => {
  const requestString = `${BASE_URL}/users/${userId}`;
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

export const signUpToVolunteer = (userId, farmPostToAdd, destination) => {
  const requestString = `${BASE_URL}/users/${userId}/volunteer`;
  return axios
    .put(
      requestString,
      { farmPostToAdd, destination },
      {
        headers: {
          "Content-Type": "application/JSON"
        }
      }
    )
    .catch(error => {
      return {
        type: "VOLUNTEER_FAIL",
        error
      };
    });
};

export const signUpToConsume = (userId, farmPostToAdd) => {
  const requestString = `${BASE_URL}/users/${userId}/consumer`;
  return axios
    .put(
      requestString,
      { farmPostToAdd },
      {
        headers: {
          "Content-Type": "application/JSON"
        }
      }
    )
    .catch(error => {
      return {
        type: "CONSUMER_FAIL",
        error
      };
    });
};

export const getFarmPost = farmPostId => {
  const requestString = `${BASE_URL}/farmPosts/${farmPostId}`;
  return axios
    .get(requestString, {
      headers: {
        "Content-Type": "application/JSON"
      }
    })
    .catch(error => {
      return {
        type: "GET_FARMER_POST_FAIL",
        error
      };
    });
};

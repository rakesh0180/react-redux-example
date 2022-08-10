import { userActionTypes } from "./userActionTypes";
import axios from "axios";

export const userPostFetch = (msg) => {
  return {
    type: userActionTypes.USER_POST_FETCHING,
    payload: msg,
  };
};
export const userPostDone = (data) => {
  return {
    type: userActionTypes.USER_POST_DONE,
    payload: data,
  };
};
export const userPostError = (error) => {
  return {
    type: userActionTypes.USER_POST_ERROR,
    payload: error,
  };
};

export const postsGetData = () => {
  return async (dispatch) => {
    try {
      dispatch(userPostFetch(true));
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const result = response.data;
      // console.log("result", result);
      if (result.hasOwnProperty("errors")) {
        dispatch(userPostError(result.message));
      } else {
        dispatch(userPostDone(result));
      }
    } catch (error) {
      dispatch(userPostError(error.message));
    }
  };
};

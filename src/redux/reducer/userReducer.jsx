import { combineReducers } from "redux";
import { userActionTypes } from "../action/userActionTypes";
const initUserPostState = {
  userPostState: {
    fetching: false,
    data: [],
    error: undefined,
  },
};

/**
user post reducer
*/

export const UserPostReducer = (state = initUserPostState, action) => {
  switch (action.type) {
    // case userActionTypes.USER_POST_FETCHING:
    //   return {
    //     ...state,
    //     fetching: true,
    //     data: [],
    //     error: undefined,
    //   };
    case userActionTypes.USER_POST_DONE:
      return {
        ...state,
        fetching: false,
        // data: [...state.data,action.payload],
        data: action.payload,
        error: undefined,
      };
    // case userActionTypes.USER_POST_ERROR:
    //   return {
    //     ...state,
    //     fetching: false,
    //     data: [],
    //     error: action.payload,
    //   };

    default: {
      return {
        ...state,
      };
    }
  }
};

export default combineReducers({
  UserPostReducerState: UserPostReducer,
});

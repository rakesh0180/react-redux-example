import { combineReducers } from "redux";
import userPostReducer from "./userReducer";

export default combineReducers({
  // combine reduce
  userPostState: userPostReducer,
});

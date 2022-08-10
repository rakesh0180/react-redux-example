import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "react-thunk";
import { persistStore } from "redux-persist";
import rootReducer from "../redux/reducer/root-reducer";
import { composeWithDevTools } from "redux-devtools-extension";
export const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

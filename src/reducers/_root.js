import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
// import { reducer as formReducer } from "redux-form";

// IMPORT CUSTOM STATE REDUCERS
import { reduceHome } from "./home";

// Combine constitiuent reducers to create the root reducer
export const reducers = combineReducers({
  routing: routerReducer,
  // form: formReducer,
  // REGISTER YOUR REDUCERS BELOW
  home: reduceHome,
});



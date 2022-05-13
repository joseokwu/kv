import { combineReducers } from "redux";
import businessReducer from "./business";
import authReducer from "./auth/index";
import adminReducer from "./admin";

const appReducer = combineReducers({
  auth: authReducer,
  business: businessReducer,
  admin: adminReducer,
});

export default appReducer;

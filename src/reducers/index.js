import { combineReducers } from "redux";

import usersListReducer from "./usersList.reducer";
import counterReducer from './counter.reducer';
import loginReducer from './login.reducer';

export default combineReducers({
  users: usersListReducer,
  counter : counterReducer,
  login : loginReducer
});
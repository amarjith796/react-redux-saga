import {
  FETCH_USERS_PENDING,
  FETCH_USERS_RECEIEVED,
  FETCH_USERS_REJECTED,
  VIEW_USER
} from "../actions/usersList.action";

const initalState = {
  users: [],
  loading: false,
  error: false,
  currentuser:{}
};

// REDCUER
export default function usersListReducer(state = initalState, { type, payload }) {
  let users = [...state.users];
  switch (type) {
    case FETCH_USERS_PENDING:
      return {
        ...state,
        loading: true
      };
    case FETCH_USERS_RECEIEVED:
      // users = users.concat(payload.results);
      users = payload.results;
      return {
        ...state,
        loading: false,
        currentuser:{},
        users
      };
    case FETCH_USERS_REJECTED:
      return {
        ...state,
        loading: false,
        status: `${payload.message}`,
        error: true
      };
    case VIEW_USER:{
      return{
        ...state,
        currentuser : {...payload}
      }
    }
    default:
      return state;
  }
}
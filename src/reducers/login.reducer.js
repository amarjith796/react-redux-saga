import {LOGGEDIN} from '../actions/login.action';
const initalState = {
    loggedIn : localStorage.getItem('loggedIn') ? localStorage.getItem('loggedIn') : false
  };
  
  // REDCUER
  export default function loginReducer(state = initalState, { type, payload }) {
    let prevState = {...state};
    if(prevState.loggedIn){
        localStorage.removeItem('loggedIn');
    }
    switch (type) { 
      case LOGGEDIN:
          return{
              ...state,
              loggedIn : !prevState.loggedIn
          } 
      default:
        return state;
    }
  }
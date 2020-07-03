import {COUNT_INC,COUNT_DEC} from '../actions/counter.action';
const initalState = {
    counter: 0,
    loading: false
  };
  
  // REDCUER
  export default function counterReducer(state = initalState, { type, payload }) {
    let count = {...state};
    switch (type) {   
      case 'COUNT_INC_ASYNC':
          return {
              ...state,
              loading : true
          } 
      case COUNT_INC:
          return{
              ...state,
              counter : count.counter + 1,
              loading : false
          }
          case COUNT_DEC:
            return{
                ...state,
                counter : count.counter - 1,
                loading : false
            } 
      default:
        return state;
    }
  }
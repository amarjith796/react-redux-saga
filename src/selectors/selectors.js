import {createSelector} from 'reselect';

//selector
const getCounter =(store) => store.counter;
const getLoggedIn = (store) => store.login;

//reselect function
 export const getCounterState = createSelector([getCounter],(counter)=>counter);

 export const getLoggedInState = createSelector([getLoggedIn], (login)=>login);
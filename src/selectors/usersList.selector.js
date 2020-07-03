import {createSelector} from 'reselect';

//selector
const usersList = state => state.users;
const currentuser = state => state.users && state.users.currentuser;

//reselect function
export const userslistSelector = createSelector(usersList, users => users);
export const currentuserSelector = createSelector(currentuser, currentuser => currentuser);



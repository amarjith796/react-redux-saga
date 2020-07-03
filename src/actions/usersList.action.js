import ApiService from "../services";
export const FETCH_USERS = "FETCH_USERS";
export const FETCH_USERS_PENDING = "FETCH_USERS_PENDING";
export const FETCH_USERS_RECEIEVED = "FETCH_USERS_FULFILLED";
export const FETCH_USERS_REJECTED = "FETCH_USERS_REJECTED";
export const VIEW_USER = "VIEW_USER";
const url = "https://randomuser.me/api/?results=";

export const fetchusers = (size) => {
  return {
    type: FETCH_USERS,
    payload: (`${url+size}`)
  };
};

export const fetchusersAPI = (url)=>{
  return ApiService(url);
} 

export const viewuser = (data) => {
  return {
    type: VIEW_USER,
    payload: data
  };
};

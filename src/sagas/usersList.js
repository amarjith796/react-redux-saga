import {put, takeLatest, call} from 'redux-saga/effects';
import * as userslistaction from '../actions/usersList.action'

function* getUsersLists(params){
    yield put({type:userslistaction.FETCH_USERS_PENDING})
    try{
        const apiResponse = yield call(userslistaction.fetchusersAPI, params.payload);
        if(apiResponse && apiResponse.data){
            yield put({type:userslistaction.FETCH_USERS_RECEIEVED, payload:apiResponse.data});
        }
    }catch(error){
        yield put({type:userslistaction.FETCH_USERS_REJECTED})
    }
}

export function* watchfetchUsersAsyn(){
    yield takeLatest(userslistaction.FETCH_USERS, getUsersLists);
}
import {put, takeLatest} from 'redux-saga/effects';

const delay = (ms) => new Promise (res => setTimeout(res, ms));


function* incrementAsync(){
    yield delay(1000);
    yield put({type:'COUNT_INC'});
}

export function* watchIncrementAsyn(){
    yield takeLatest('COUNT_INC_ASYNC', incrementAsync);
}


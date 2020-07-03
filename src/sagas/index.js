import {all} from 'redux-saga/effects';
import {watchfetchUsersAsyn} from './usersList';
import {watchIncrementAsyn} from './counter';

function* helloSaga(){
    console.log('Hello Saga');
}

// notice how we now only export the rootSaga
//single entry point to start all the Sagas at once
export default function* rootSaga(){
    yield all([
        helloSaga(),
        watchIncrementAsyn(),
        watchfetchUsersAsyn()
    ])
}
import {createStore, applyMiddleware, compose } from 'redux';

// import thunk from "redux-thunk";

// import promise from "redux-promise-middleware";
import rootReducer from "../reducers";
import createSageMiddleware from 'redux-saga';
import rootSaga from '../sagas';
// import logger from "redux-logger";


// const middleware = [promise()];
const sageMiddleware = createSageMiddleware();
const middleware = [sageMiddleware];

const allStoreEnhancers = compose(applyMiddleware(...middleware),window.devToolsExtension ? window.devToolsExtension():f=>f);

const store = createStore(rootReducer, allStoreEnhancers);

sageMiddleware.run(rootSaga);

export default store;
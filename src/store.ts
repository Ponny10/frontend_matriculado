import createSagaMiddleware from 'redux-saga';
import {combineReducers, configureStore} from '@reduxjs/toolkit';

import Sagas from './middlewares';
import Reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        thunk: false,
    }).concat(sagaMiddleware),
    reducer: combineReducers(Reducers),
});

sagaMiddleware.run(Sagas);

export default store;


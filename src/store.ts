import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers, configureStore} from '@reduxjs/toolkit';

import Sagas from './middlewares';
import Reducers from './reducers';

const persitsConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persitsConfig, combineReducers(Reducers));

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: false,
        serializableCheck: false,
    }).concat(sagaMiddleware),
    reducer: persistedReducer,
});

const persistor = persistStore(store);

sagaMiddleware.run(Sagas);

export {
    persistor,
    store,
};


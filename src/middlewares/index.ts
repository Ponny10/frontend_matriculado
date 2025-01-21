import { fork, takeLatest } from 'redux-saga/effects';

import { actionsReducer as actions } from '../reducers';
import * as auth from './auth';

function* AuthSagas() {
    yield takeLatest(actions.auth.login.signIn.type, auth.login.Login)
}

export default function* startSagas() {
    yield fork(AuthSagas);
}
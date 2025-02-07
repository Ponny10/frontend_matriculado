import { fork, takeLatest } from 'redux-saga/effects';

import * as auth from './auth';
import * as home from './home';
import { actionsReducer as actions } from 'reducers';

function* AuthSagas() {
    yield takeLatest(actions.auth.login.signIn.type, auth.login.Login)
}

function* HomeSagas() {
    yield takeLatest(actions.home.dashboard.addCalifications.type, home.dashboard.AddCalification);
    yield takeLatest(actions.home.dashboard.addStudent.type, home.dashboard.AddStudent);
    yield takeLatest(actions.home.dashboard.deleteCalification.type, home.dashboard.DeleteCalification);
    yield takeLatest(actions.home.dashboard.deleteStudent.type, home.dashboard.DeleteStudent);
    yield takeLatest(actions.home.dashboard.editStudent.type, home.dashboard.EditStudent);
    yield takeLatest(actions.home.dashboard.getCalifications.type, home.dashboard.GetCalifications);
    yield takeLatest(actions.home.dashboard.getStudents.type, home.dashboard.StudentsList);
}

export default function* startSagas() {
    yield fork(AuthSagas);
    yield fork(HomeSagas);
}
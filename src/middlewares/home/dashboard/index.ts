import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, select } from 'redux-saga/effects';

import Request from './request';
import { actionsReducer as actions } from 'reducers';

const getUser = (state: _RouteState) => state.auth.login.user;

export function* AddStudent({payload}: PayloadAction<_StudentProps>) {
    try {
        /* const {usuario} = yield select(getTeacherUser); */
        const responseApi: _ResponseApi<boolean> = yield call(Request.AddStudent, payload);

        if (responseApi.ok) {
            yield put(actions.general.general.setHomeNavigate(true));
        }
    } catch (error) {
        console.log('Error en la petición: ', error);
    }
}

export function* StudentsList(payload: PayloadAction<string>) {
    try {
        const response: _ResponseApi<_Student[]> = yield call(Request.StudentsList, payload.payload);

        if (response.ok) {
            yield put(actions.home.dashboard.setStudents(response));
        }
    } catch (error) {
        console.log('Error de logueo: ', error);
    }
}

export function* EditStudent({payload}: PayloadAction<_Student>) {
    try {
        const response: _ResponseApi<_Student> = yield call(Request.EditStudent, payload);

        if (response.ok) {
            yield put(actions.general.general.setHomeNavigate(true));
        }
    } catch (error) {
        console.log('Error de logueo: ', error);
    }
}

export function* DeleteStudent({payload}: PayloadAction<number>) {
    try {
        const responseApi: _ResponseApi<boolean> = yield call(Request.DeleteStudent, payload);

        const {usuario} = yield select(getUser);
        if (responseApi.ok) {
            yield put(actions.home.dashboard.getStudents(usuario));
        }
    } catch (error) {
        console.log('Error de logueo: ', error);
    }
}

export function* GetCalifications({payload}: PayloadAction<number>) {
    try {
        const response: _ResponseApi<_Calification[]> = yield call(Request.GetCalifications, payload);

        if (response.ok) {
            yield put(actions.home.dashboard.setCalifications(response.data));
        }
    } catch (error) {
        console.log('Error de logueo: ', error);
    }
}

export function* AddCalification({payload}: PayloadAction<_PropsAddCalification>) {
    try {
        const response: _ResponseApi<boolean> = yield call(Request.AddCalification, payload);

        if (response.ok) {
            yield put(actions.home.dashboard.getCalifications(payload.matriculaId));
        }
    } catch (error) {
        console.log('Error de logueo: ', error);
    }
}

export function* DeleteCalification({payload}: PayloadAction<number>) {
    try {
        const response: _ResponseApi<boolean> = yield call(Request.DeleteCalification, payload);

        if (response.ok) {
            yield put(actions.home.dashboard.removeCalification(payload));
        }
    } catch (error) {
        console.log('Error de logueo: ', error);
    }
}
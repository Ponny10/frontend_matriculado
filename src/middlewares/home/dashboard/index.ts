import { useNavigate } from 'react-router-dom';
import { PayloadAction } from '@reduxjs/toolkit';
import { call, put } from 'redux-saga/effects';

import Request from './request';
import { actionsReducer as actions } from 'reducers';
/* const getTeacherUser = (state: _RouteState) => state.auth.login.user; */

export function* AddStudent({payload}: PayloadAction<_StudentProps>) {
    try {
        const navigate = useNavigate();
        /* const {usuario} = yield select(getTeacherUser); */
        const responseApi: _ResponseApi<boolean> = yield call(Request.AddStudent, payload);

        if (responseApi.ok) {
            navigate('/matriculado');
        }
    } catch (error) {
        console.log('Error en la petición: ', error);
    }
}

export function* StudentsList(payload: PayloadAction<string>) {
    try {
        const response: _ResponseApi<_StudentsList[]> = yield call(Request.StudentsList, payload.payload);

        if (response.ok) {
            yield put(actions.home.dashboard.setStudents(response));
        }
    } catch (error) {
        console.log('Error de logueo: ', error);
    }
}
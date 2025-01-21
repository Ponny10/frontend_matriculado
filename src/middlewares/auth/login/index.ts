import { call, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import Request from './request';
import { actionsReducer as actions } from '../../../reducers';

export function* Login({payload}: PayloadAction<_LoginProps>) {
    try {
        const response: _ResponseApi<_ResponseApiLogin> = yield call(Request.SignIn, payload);
        
        if (response.ok) {
            yield put(actions.auth.login.setLogin(response));
        }
    } catch (error) {
        console.log('Error de logueo: ', error);
    }
}
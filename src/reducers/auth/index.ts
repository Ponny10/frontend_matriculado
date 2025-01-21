import { combineReducers } from '@reduxjs/toolkit';

import Login, {actionsTypes as actionsLogin} from './login';

export const actionsTypes = {
    login: actionsLogin,
}

export default combineReducers({
    login: Login,
});
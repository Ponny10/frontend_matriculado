import { combineReducers } from '@reduxjs/toolkit';

import Login, {actionsTypes as actionsLogin} from './login';

export const actionsType = {
    login: actionsLogin,
}

export default combineReducers({
    login: Login,
});

import { combineReducers } from 'redux';
import General, {actionsType as actionsGeneral} from './general';

export const actionsTypes = {
    general: actionsGeneral,
}

export default combineReducers({
    general: General,
});
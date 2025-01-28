import { combineReducers } from 'redux';

import Dashboard, {actionsType as actionsDashboard} from './dashboard';

export const actionsType = {
    dashboard: actionsDashboard,
}

export default combineReducers({
    dashboard: Dashboard,
});


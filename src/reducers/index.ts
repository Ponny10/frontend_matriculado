
import auth, {actionsType as actionsAuth} from './auth';
import home, {actionsType as actionsDashboard} from './home';

export const actionsReducer = {
    auth: actionsAuth,
    home: actionsDashboard,
}

export default {
    auth,
    home,
}
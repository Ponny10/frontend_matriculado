
import auth, {actionsType as actionsAuth} from './auth';
import home, {actionsType as actionsDashboard} from './home';
import web, {actionsTypes as actionsGeneral} from './general';

export const actionsReducer = {
    auth: actionsAuth,
    home: actionsDashboard,
    general: actionsGeneral,
}

export default {
    auth,
    home,
    web,
}
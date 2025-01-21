import { requestApi } from '../../../constants';

const SignIn = async(props: _LoginProps) => {
    return requestApi({
        method: 'POST',
        target: 'autenticacion',
        data: props,
    });
}

export default {
    SignIn,
}
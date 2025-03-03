import { useDispatch } from 'react-redux';

import { actionsReducer as actions } from 'reducers';
import { useForm } from 'utils/useForm';
import { Button, Text } from 'components';
import './styles.css';

export const Login = () => {

    const { handleInputChange, values } = useForm<_LoginProps>({
        Usuario: '',
        Pass: '',
    });

    const { Usuario, Pass } = values;

    const dispatch = useDispatch();

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        if (Usuario !== '' && Pass !== '') {
            dispatch(actions.auth.login.signIn(values));
        }
    }

    return (
        <div className='container_login'>
            <div className='container_form'>
                <Text
                    fontSize={30}
                    fontWeight={'600'}
                    text={'Iniciar sesión'}
                    textAlign='center'
                />
                <hr />
                <form autoComplete="off">
                    <div className='container_input'>
                        <Text fontSize={18} fontWeight='400' text='Usuario:'  />
                        <input
                            onChange={handleInputChange}
                            name="Usuario"
                            type="text"
                            value={Usuario}
                        />
                    </div>
                    <div className='container_input'>
                        <Text fontSize={18} fontWeight='400' text='Contraseña:'/>
                        <input
                            name="Pass"
                            onChange={handleInputChange}
                            required
                            type="password"
                            value={Pass}
                        />
                    </div>
                </form>
                <Button
                    backgroundColor='rgba(144, 103, 176, 0.8)'
                    borderRadius={12}
                    borderStyle='none'
                    color='rgb(255, 255, 255)'
                    fontSize={18}
                    height={44}
                    marginTop={12}
                    onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleSubmit(e)}
                    text='Iniciar sesión'
                    textAlign='center'
                    width={'100%'}
                />
            </div>
        </div>
    )
}
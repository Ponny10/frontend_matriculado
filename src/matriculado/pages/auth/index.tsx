import { useForm } from '../../../utils/useForm';
import { useDispatch } from 'react-redux';
import { actionsReducer as actions } from '../../../reducers';

export const Login = () => {

    const {handleInputChange, values} = useForm<_LoginProps>({
        Usuario: '',
        Pass: '',
    });

    const {Usuario, Pass} = values;

    const dispatch = useDispatch();

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        console.log('Enviar', values);
        
        dispatch(actions.auth.login.signIn(values));
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '25%' }}>
                <h1>Iniciar sesión</h1>
                <form autoComplete="off">
                    <div style={{ marginTop: '24px' }}>
                        <label>Usuario:</label>
                        <input
                            onChange={handleInputChange}
                            name="Usuario"
                            type="text"
                            value={Usuario}
                        />
                    </div>
                    <div style={{ marginTop: '24px' }}>
                        <label>Usuario:</label>
                        <input
                            onChange={handleInputChange}
                            name="Pass"
                            type="password"
                            value={Pass}
                        />
                    </div>
                </form>
                <button
                    onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleSubmit(e)}
                    style={{
                        width: '100%',
                        height: '36px',
                        borderRadius: '12px',
                        borderStyle: 'none',
                        marginTop: '24px'
                    }}>
                    Enviar
                </button>
            </div>
        </div>
    )
}

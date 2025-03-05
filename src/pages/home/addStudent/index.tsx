import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from 'utils/useForm';
import { actionsReducer as actions } from 'reducers';
import { Button, Text } from 'components';
import './styles.css';

export const AddStudent = () => {

    const { navigateHome } = useSelector((state: _RouteState) => state.web.general);
    const { student } = useSelector((state: _RouteState) => state.home.dashboard);

    const { handleInputChange, values } = useForm<_StudentProps>({
        id_asig: student ? student.asignatura ? student.asignatura : 0 : 0,
        direccion: student ? student.direccion : '',
        dni: student ? student.dni : '',
        edad: student ? student.edad : 0,
        email: student ? student.email : '',
        nombre: student ? student.nombre : '',
    });

    const { direccion, dni, edad, email, id_asig, nombre } = values;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        if (student?.id) {
            return dispatch(actions.home.dashboard.editStudent({
                direccion,
                dni,
                edad,
                email,
                id: student.id,
                nombre,
            }));
        } else {

            if (nombre !== '' && dni !== '' && email !== '') {
                return dispatch(actions.home.dashboard.addStudent({
                    direccion,
                    dni,
                    edad,
                    email,
                    nombre,
                    id_asig: id_asig === 0 ? 1 : id_asig,
                }));
            }
            else {
                alert('Todos los campos son requeridos.');
            }
        }
    }

    useEffect(() => {
        if (navigateHome) {
            navigate('/matriculado');
            dispatch(actions.general.general.setHomeNavigate(false));
            dispatch(actions.home.dashboard.resetStudent());
        }
    }, [dispatch, navigate, navigateHome]);

    return (
        <div className='container_add_student'>
            <Text
                fontSize={18}
                text={student?.dni ? 'Actualizar' : 'Guardar'}
                fontWeight='400'
            />
            <form autoComplete="off">
                <div className='add_student_input'>
                    <Text fontSize={18} fontWeight='400' text='DNI:'/>
                    <input
                        className='login_form_input'
                        disabled={student?.dni ? true : false}
                        onChange={handleInputChange}
                        name='dni'
                        type="text"
                        value={dni}
                    />
                </div>
                <div className='add_student_input'>
                    <Text fontSize={18} fontWeight='400' text='Nombre:'/>
                    <input
                        className='login_form_input'
                        onChange={handleInputChange}
                        name='nombre'
                        type='text'
                        value={nombre}
                    />
                </div>
                <div className='add_student_input'>
                    <Text fontSize={18} fontWeight='400' text='Dirección:'/>
                    <input
                        className='login_form_input'
                        onChange={handleInputChange}
                        name='direccion'
                        type='text'
                        value={direccion}
                    />
                </div>
                <div className='add_student_input'>
                    <Text fontSize={18} fontWeight='400' text='Edad:'/>
                    <input
                        className='login_form_input'
                        onChange={handleInputChange}
                        name='edad'
                        type='number'
                        value={edad}
                    />
                </div>
                <div className='add_student_input'>
                    <Text fontSize={18} fontWeight='400' text='Correo electrónico:'/>
                    <input
                        className='login_form_input'
                        onChange={handleInputChange}
                        name='email'
                        type='text'
                        value={email}
                    />
                </div>
                <div className='add_student_input'>
                    <Text fontSize={18} fontWeight='400' text='Asignatura:'/>
                    <select
                        className='login_form_input'
                        value={student?.asignatura ? student.asignatura : values.id_asig}
                        name='id_asig'
                        onChange={handleInputChange}>
                        <option value={0}>Seleccione una opción</option>
                        <option value={1}>Matemáticas</option>
                        <option value={2}>Informática</option>
                        <option value={3}>Inglés</option>
                        <option value={4}>Lengua</option>
                    </select>
                </div>
            </form >
            <Button
                backgroundColor='rgba(61, 151, 41, 0.95)'
                borderRadius={12}
                borderStyle='none'
                color='rgb(255, 255, 255)'
                fontSize={18}
                height={44}
                marginTop={18}
                onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleSubmit(e)}
                text={student?.dni ? 'Actualizar' : 'Guardar'}
                textAlign='center'
                width={'100%'}
            />
        </div >
    )
}

export default AddStudent;

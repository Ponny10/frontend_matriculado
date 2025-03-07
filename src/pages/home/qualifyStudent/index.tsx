import { ChangeEvent, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import './styles.css';
import { Button, Text } from 'components';
import { actionsReducer as actions } from 'reducers';

export const QualifyStudent = () => {

    const { registration, califications } = useSelector((state: _RouteState) => state.home.dashboard);
    const [calification, setCalification] = useState<_Calification[]>([{
        descripcion: '',
        nota: 0,
        porcentaje: 0,
    }]);

    const dispatch = useDispatch();

    const addCalification = () => {
        if (calification[0].descripcion === '') return;
        const data: _PropsAddCalification = {
            descripcion: calification[0].descripcion,
            matriculaId: registration!,
            nota: calification[0].nota,
            porcentaje: calification[0].porcentaje,
        }
        dispatch(actions.home.dashboard.addCalifications(data));
        setCalification([{
            descripcion: '',
            nota: 0,
            porcentaje: 0,
        }]);
    }

    const deleteCalification = (id: number) => dispatch(actions.home.dashboard.deleteCalification(id));

    useEffect(() => {
        dispatch(actions.home.dashboard.getCalifications(registration ?? 0));
    }, [dispatch, registration]);

    let notaFinal: number = 0;

    if (califications) {
        califications.map((cal: _Calification) => (
            notaFinal = notaFinal + cal.nota * (cal.porcentaje / 100)
        ));
    }

    return (
        <div className='container_student'>
            <Text type='h2' fontSize={18} fontWeight='700'>QualifyStudent {registration}</Text>
            <table className='student_table'>
                <thead className='student_thead'>
                    <tr className='student_th'>
                        <td>Descripción</td>
                        <td>Nota</td>
                        <td>Porcentaje</td>
                        <td>Eliminar</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        califications && (
                            califications.map((cal: _Calification) => (
                                <tr key={cal.id}>
                                    <td className='student_tr'>{cal.descripcion}</td>
                                    <td className='student_tr'>{cal.nota}</td>
                                    <td className='student_tr'>{cal.porcentaje}</td>
                                    <td className='student_tr'>
                                        <Button
                                            backgroundColor='transparent'
                                            borderRadius={12}
                                            borderStyle='dashed'
                                            color='rgb(255, 255, 255)'
                                            fontSize={18}
                                            height={44}
                                            onClick={() => deleteCalification(cal.id!)}
                                            text='❌'
                                            textAlign='center'
                                            width={90}
                                        />
                                    </td>
                                </tr>
                            ))
                        )
                    }
                    <tr>
                        <th>
                            <input
                                className='login_form_input'
                                type="text"
                                id="descripcion"
                                name="descripcion"
                                value={calification[0].descripcion}
                                onChange={({ target }: ChangeEvent<HTMLInputElement>) => setCalification([{
                                    ...calification[0], descripcion: target.value,
                                }])} />
                        </th>
                        <th>
                            <input
                                className='login_form_input'
                                type="number"
                                id="nota"
                                name="nota"
                                value={calification[0].nota}
                                onChange={({ target }: ChangeEvent<HTMLInputElement>) => setCalification([{
                                    ...calification[0], nota: parseInt(target.value),
                                }])}
                            />
                        </th>
                        <th>
                            <input
                                className='login_form_input'
                                type="number"
                                id="porcentaje"
                                name="porcentaje"
                                value={calification[0].porcentaje}
                                onChange={({ target }: ChangeEvent<HTMLInputElement>) => setCalification([{
                                    ...calification[0], porcentaje: parseInt(target.value),
                                }])}
                            />
                        </th>
                        <th>
                            <Button
                                backgroundColor='rgba(61, 151, 41, 0.95)'
                                borderRadius={12}
                                borderStyle='none'
                                color='rgb(255, 255, 255)'
                                fontSize={18}
                                height={40}
                                onClick={() => addCalification()}
                                text='Agregar'
                                textAlign='center'
                                width={90}
                            />
                        </th>
                    </tr>
                    <p>NOTA FINAL = {notaFinal}</p>
                </tbody>
            </table>
        </div>
    )
}

export default QualifyStudent;
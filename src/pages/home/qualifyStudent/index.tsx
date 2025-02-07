import { ChangeEvent, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import './styles.css';
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
        <div>
            <h2>QualifyStudent {registration}</h2>
            <div>
                <table>
                    <thead>
                        <tr>
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
                                        <td>{cal.descripcion}</td>
                                        <td>{cal.nota}</td>
                                        <td>{cal.porcentaje}</td>
                                        <td onClick={() => deleteCalification(cal.id!)} style={{ cursor: 'pointer' }}>❌</td>
                                    </tr>
                                ))
                            )
                        }
                        <tr>
                            <th>
                                <input
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
                                <button className='button_log_out' onClick={() => addCalification()}>Agregar</button>
                            </th>
                        </tr>
                        <p>NOTA FINAL = {notaFinal}</p>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default QualifyStudent;
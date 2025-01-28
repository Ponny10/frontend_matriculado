import { useForm } from 'utils/useForm';

export const AddStudent = () => {

    const { handleInputChange, values } = useForm<_StudentProps>({
        id_asig: 0,
        direccion: '',
        dni: '',
        edad: 0,
        email: '',
        nombre: '',
    });

    const { direccion, dni, edad, email, id_asig, nombre } = values;

    return (
        <div style={{ padding: '30px' }}>
            <p className='titlee'>Nuevo alumno</p>
            <form autoComplete="off">
                <div className='container_input'>
                    <label>DNI:</label>
                    <input
                        onChange={handleInputChange}
                        name='dni'
                        type="text"
                        value={dni}
                    />
                </div>
                <div className='container_input'>
                    <label>Nombre:</label>
                    <input
                        onChange={handleInputChange}
                        name='nombre'
                        type='text'
                        value={nombre}
                    />
                </div>
                <div className='container_input'>
                    <label>Dirección:</label>
                    <input
                        onChange={handleInputChange}
                        name='direccion'
                        type='text'
                        value={direccion}
                    />
                </div>
                <div className='container_input'>
                    <label>Edad:</label>
                    <input
                        onChange={handleInputChange}
                        name='edad'
                        type='number'
                        value={edad}
                    />
                </div>
                <div className='container_input'>
                    <label>Email:</label>
                    <input
                        onChange={handleInputChange}
                        name='email'
                        type='text'
                        value={email}
                    />
                </div>
                <div className='container_input'>
                    <label>Asignatura:</label>
                    <select
                        value={values.id_asig}
                        name='id_asig'
                        onChange={handleInputChange}>
                        <option value='0'>Seleccione una opción</option>
                        <option value='1'>Matemáticas</option>
                        <option value='2'>Development</option>
                    </select>
                </div>
            </form >
            {
                JSON.stringify(id_asig, null, 5)
            }
        </div >
    )
}

export default AddStudent;

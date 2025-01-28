import { requestApi } from '_constants'

const StudentsList = async (usuario: string) => {
    return requestApi({
        method: 'GET',
        target: `alumnosProfesor?usuario=${usuario}`,
    });
}

const AddStudent = async (props: _StudentProps) => {
    const data = {
        dni: props.dni,
        nombre: props.nombre,
        direccion: props.direccion,
        edad: props.edad,
        email: props.email,
    }

    return requestApi({
        data,
        method: 'POST',
        target: `agregarAlumno?id_asig=${props.id_asig}`,
    })
}

export default {
    AddStudent,
    StudentsList,
}
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

const EditStudent = async (student: _Student) => {
    return requestApi({
        method: 'PUT',
        target: 'actualizarAlumno',
        data: student,
    })
}

const DeleteStudent = async (idStudent: number) => {
    return requestApi({
        method: 'DELETE',
        target: `eliminarAlumno?id=${idStudent}`,
    });
}

const GetCalifications = async (matriculaId: number) => {
    return requestApi({
        method: 'GET',
        target: `calificaciones?matriculaId=${matriculaId}`,
    });
}

const AddCalification = async (props: _PropsAddCalification) => {
    const data: _PropsAddCalification = {
        descripcion: props.descripcion,
        nota: props.nota,
        porcentaje: props.porcentaje,
        matriculaId: props.matriculaId,
    }
    return requestApi({
        method: 'POST',
        target: `calificacion`,
        data,
    });
}

const DeleteCalification = async (id: number) => {
    return requestApi({
        method: 'DELETE',
        target: `calificacion?id=${id}`,
    });
}

export default {
    AddStudent,
    DeleteStudent,
    DeleteCalification,
    EditStudent,
    GetCalifications,
    AddCalification,
    StudentsList,
}
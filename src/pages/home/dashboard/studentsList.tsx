import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { actionsReducer as actions } from 'reducers';

interface _StudentListProps {
  students: _Student[];
}

export const StudentsList = ({students}: _StudentListProps) => {

  const dispatch = useDispatch();

  const setStudentEdit = (student: _Student) => {
    dispatch(actions.home.dashboard.setStudent(student));
  }

  const setRegistration = (matricula: number) => {
    dispatch(actions.home.dashboard.setRegistration(matricula));
  }
  
  const deleteStudent = async(idStudent: number) => {
    await dispatch(actions.home.dashboard.deleteStudent(idStudent));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>DNI</th>
            <th>NOMBRE</th>
            <th>EDAD</th>
            <th>DIRECCION</th>
            <th>EMAIL</th>
            <th>ASIGNATURA</th>
            <th>EDITAR</th>
            <th>CALIFICAR</th>
            <th>ELIMINAR</th>
          </tr>
        </thead>
        <tbody>
          {
            students.map((student: _Student) => (
              <tr key={student.id}>
                <th>{student.id}</th>
                <th>{student.dni}</th>
                <th>{student.nombre}</th>
                <th>{student.edad}</th>
                <th>{student.direccion}</th>
                <th>{student.email}</th>
                <th>{student.asignatura}</th>
                <th onClick={() => setStudentEdit(student)}><NavLink to={'/inscribir'} >Editar</NavLink></th>
                <th onClick={() => setRegistration(student.matriculaId!)}><NavLink to={'/calificar'}>Calificar</NavLink></th>
                <th onClick={() => deleteStudent(student.id!)}>Borrar</th>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

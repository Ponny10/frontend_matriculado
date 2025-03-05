import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { actionsReducer as actions } from 'reducers';
import './styles.css';

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
    <div className='container_student'>
      <table className='student_table'>
        <thead className='student_thead'>
          <tr>
            <th className='student_th'>ID</th>
            <th  className='student_th'>DNI</th>
            <th  className='student_th'>NOMBRE</th>
            <th  className='student_th'>EDAD</th>
            <th  className='student_th'>DIRECCION</th>
            <th  className='student_th'>EMAIL</th>
            <th  className='student_th'>ASIGNATURA</th>
            <th  className='student_th'>EDITAR</th>
            <th  className='student_th'>CALIFICAR</th>
            <th  className='student_th'>ELIMINAR</th>
          </tr>
        </thead>
        <tbody>
          {
            students.map((student: _Student) => (
              <tr key={student.id}>
                <th className='student_tr'>{student.id}</th>
                <th className='student_tr'>{student.dni}</th>
                <th className='student_tr'>{student.nombre}</th>
                <th className='student_tr'>{student.edad}</th>
                <th className='student_tr'>{student.direccion}</th>
                <th className='student_tr'>{student.email}</th>
                <th className='student_tr'>{student.asignatura}</th>
                <th className='student_tr' onClick={() => setStudentEdit(student)}><NavLink to={'/inscribir'} >Editar</NavLink></th>
                <th className='student_tr' onClick={() => setRegistration(student.matriculaId!)}><NavLink to={'/calificar'}>Calificar</NavLink></th>
                <th className='student_tr' onClick={() => deleteStudent(student.id!)}>Borrar</th>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

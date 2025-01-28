

export const StudentsList = ({students}: _DashboardState) => {
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
                students.map((student: _StudentsList) => (
                  <tr key={student.id}>
                    <th>{student.id}</th>
                    <th>{student.dni}</th>
                    <th>{student.nombre}</th>
                    <th>{student.edad}</th>
                    <th>{student.direccion}</th>
                    <th>{student.email}</th>
                    <th>{student.asignatura}</th>
                    <th>Editar</th>
                    <th>Calificar</th>
                    <th>Borrar</th>
                  </tr>
                ))
              }
            </tbody>
        </table>
    </div>
  )
}

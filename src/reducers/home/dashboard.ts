import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: _DashboardState = {
    students: [],
}

export const dashboardSlice = createSlice({
    initialState,
    name: 'dashboard',
    reducers: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        addStudent: (state: _DashboardState, action: PayloadAction<_StudentProps>) => undefined,
        getStudents: (state: _DashboardState, action: PayloadAction<string>) => undefined,
        setStudents: (state: _DashboardState, action: PayloadAction<_ResponseApi<_StudentsList[]>>) => {
            state.students = action.payload.data.map((student: _StudentsList): _StudentsList => ({
                asignatura: student.asignatura,
                direccion: student.direccion,
                dni: student.dni,
                edad: student.edad,
                email: student.email,
                id: student.id,
                nombre: student.nombre,
            }));
        }
    }
});

export const actionsType = dashboardSlice.actions;

export default dashboardSlice.reducer;
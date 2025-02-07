import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: _DashboardState = {
    califications: [],
    students: [],
    student: null,
    registration: null,
}

export const dashboardSlice = createSlice({
    initialState,
    name: 'dashboard',
    reducers: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        addCalifications: (state: _DashboardState, action: PayloadAction<_PropsAddCalification>) => undefined,
        addStudent: (state: _DashboardState, action: PayloadAction<_StudentProps>) => undefined,
        deleteCalification: (state: _DashboardState, action: PayloadAction<number>) => undefined,
        deleteStudent: (state: _DashboardState, action: PayloadAction<number>) => undefined,
        editStudent: (state: _DashboardState, action: PayloadAction<_Student>) => undefined,
        getCalifications: (state: _DashboardState, action: PayloadAction<number>) => undefined,
        getStudents: (state: _DashboardState, action: PayloadAction<string>) => undefined,
        setCalifications: (state: _DashboardState, action: PayloadAction<_Calification[]>) => ({
            ...state,
            califications: action.payload.map((calification: _Calification) => <_Calification>{
                descripcion: calification.descripcion,
                id: calification.id,
                matriculaId: calification.matriculaId,
                nota: calification.nota,
                porcentaje: calification.porcentaje,
            }),
        }),
        setStudents: (state: _DashboardState, action: PayloadAction<_ResponseApi<_Student[]>>) => ({
            ...state,
            students: action.payload.data.map((student: _Student): _Student => <_Student>{
                asignatura: student.asignatura,
                direccion: student.direccion,
                dni: student.dni,
                edad: student.edad,
                email: student.email,
                id: student.id,
                nombre: student.nombre,
                matriculaId: student.matriculaId,
            }),
        }),
        setStudent: (state: _DashboardState, action: PayloadAction<_Student>) => ({
            ...state,
            student: {
                direccion: action.payload.direccion,
                dni: action.payload.dni,
                edad: action.payload.edad,
                email: action.payload.email,
                nombre: action.payload.nombre,
                asignatura: action.payload.asignatura,
                id: action.payload.id,
                matricula: action.payload.matriculaId,
            },
        }),
        setRegistration: (state: _DashboardState, action: PayloadAction<number>) => {
            state.registration = action.payload;
        },
        removeCalification: (state: _DashboardState, action: PayloadAction<number>) => ({
            ...state,
            califications: state.califications.filter((cal: _Calification) => cal.id !== action.payload)
        }),
        resetStudent: (state: _DashboardState) => ({
            ...state,
            student: null,
        }),
    }
});

export const actionsType = dashboardSlice.actions;

export default dashboardSlice.reducer;
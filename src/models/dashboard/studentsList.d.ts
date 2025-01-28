interface _DashboardState {
    students: _StudentsList[];
}

interface _StudentsList {
    asignatura?: string;
    direccion: string;
    dni: string;
    edad: number;
    email: string;
    id?: number;
    nombre: string;
}

interface _HomeState {
    dashboard: _DashboardState;
}

interface _StudentProps extends _StudentsList {
    id_asig: number;
}
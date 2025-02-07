interface _HomeState {
    dashboard: _DashboardState;
}

interface _DashboardState {
    students: _Student[];
    student: _Student | null;
    registration: number | null;
    califications: _Calification[];
}

interface _Student {
    asignatura?: number;
    direccion: string;
    dni: string;
    edad: number;
    email: string;
    id?: number;
    nombre: string;
    matriculaId?: number,
}

interface _StudentProps extends _Student {
    id_asig: number;
}

interface _Calification {
    id?: number;
    descripcion: string;
    nota: number;
    porcentaje: number;
    matriculaId?: number;
    matricula?: null;
}

interface _PropsAddCalification extends _Calification{
    matriculaId: number;
}
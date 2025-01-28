import { lazy } from 'react';
import { _Routes } from 'models/routes.interfaces';

/* Cargar Componente o Módulo bajo demanda */
/* Cambiar el nombre de los chunks, con vite no aplica, npm si */
const Dashboard = lazy(() => import(/* webpackChunkName: "NuevoChunkMatriculado" */ 'pages/home/dashboard'));
const AddStudent = lazy(() => import('pages/home/addStudent'));

/* Cargar rutas dinámicas */
export const routes: _Routes[] = [
    {
        to: '/matriculado',
        path: 'matriculado',
        Component: Dashboard,
        name: 'Matriculado',
    },
    {
        Component: AddStudent,
        name: 'Inscribir',
        path: 'inscribir',
        to: '/inscribir',
    }
]
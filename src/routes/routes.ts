import { lazy } from 'react';
import { _Routes } from '../interfaces/routes.interfaces';

/* Cargar Componente o Módulo bajo demanda */
/* Cambiar el nombre de los chunks, con vite no aplica, npm si */
const Matriculado = lazy(() => import(/* webpackChunkName: "NuevoChunkMatriculado" */ '../matriculado/pages/Matriculado'));
const Test = lazy(() => import(/* webpackChunkName: "NuevoChunkMatriculado" */ '../matriculado/pages/Test'));

/* Cargar rutas dinámicas */
export const routes: _Routes[] = [
    {
        to: '/matriculado',
        path: 'matriculado',
        Component: Matriculado,
        name: 'Matriculado',
    },
    {
        to: '/test',
        path: 'test',
        Component: Test,
        name: 'Test',
    },
]
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';

import { routes } from './routes';
import logoHeader from './../assets/react.svg';
import { _Routes } from '../models/routes.interfaces';
import { Login } from '../matriculado/pages/auth';

export const Navigation = () => {

    const { isAuthenticated }: _LoginState = useSelector((state: _RouteState) => state.auth.login);



    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            {
                isAuthenticated ? (
                    <BrowserRouter >
                        <div>
                            <nav>
                                <img src={logoHeader} alt="Logo de header." />
                                <ul>
                                    {/* Rerrorer el menu de rutas dinámicas */}
                                    {
                                        routes.map(({ name, to }: _Routes) => (
                                            <li key={name}>
                                                <NavLink to={to}>{name}</NavLink>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </nav>

                            <Routes>
                                {/* Recorrer las rutas */}
                                {
                                    routes.map(({ path, Component }: _Routes) => (
                                        <Route key={path} path={path} element={<Component />} />
                                    ))
                                }

                                {/* Si no existe un path, cargar uno definido por default */}
                                <Route path='/*' element={<Navigate to={routes[0].to} replace />} />
                            </Routes>
                        </div>
                    </BrowserRouter>
                ) : (
                    <Login />
                )
            }
        </Suspense>
    )
}

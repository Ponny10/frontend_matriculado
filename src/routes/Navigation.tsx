import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { routes } from './routes';
import { Login } from 'pages/auth';
import { Navbar } from 'components';
import { _Routes } from 'models/routes.interfaces';

export const Navigation = () => {

    const { isAuthenticated }: _LoginState = useSelector((state: _RouteState) => state.auth.login);

    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            {
                isAuthenticated ? (
                    <BrowserRouter >
                        <div>
                            <Navbar />
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

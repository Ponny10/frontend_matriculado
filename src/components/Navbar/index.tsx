import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

import { _Routes } from 'models/routes.interfaces';
import { actionsReducer as actions } from 'reducers';
import { Button } from 'components';
import { routes } from 'routes/routes';
import logoHeader from 'assets/react.svg';
import './styles.css';
import { useState } from 'react';

export const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logOut = () => {
        navigate('/');
        dispatch(actions.auth.login.logOut());
    }

    return (
        <div className='container'>
            <nav className='container_nav'>
                <img src={logoHeader} alt="Logo de header." />
                <ul className='container_ul'>
                    {/* Rerrorer el menu de rutas dinámicas */}
                    {
                        routes.map(({ name, to }: _Routes) => (
                            <li key={name} className='container_li'>
                                <NavLink
                                    to={to}
                                    className={({ isActive }) => isActive ? "container_nav_link active" : "container_nav_link"}
                                >{name}</NavLink>
                            </li>
                        ))
                    }
                </ul>
                <Button
                    backgroundColor='rgba(225, 70, 70, 0.95)'
                    borderRadius={12}
                    borderStyle='none'
                    color='rgb(255, 255, 255)'
                    fontSize={18}
                    height={44}
                    onClick={() => logOut()}
                    text='Cerrar sesión'
                    textAlign='center'
                    width={160}
                />
            </nav>
        </div>
    )
}

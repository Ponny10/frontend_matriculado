import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

import './styles.css';
import { _Routes } from 'models/routes.interfaces';
import { actionsReducer as actions } from 'reducers';
import { Button, Icon } from 'components';
import { routes } from 'routes/routes';
import logoHeader from 'assets/react.svg';
import menu from 'assets/menu.svg';

export const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logOut = () => {
        navigate('/');
        dispatch(actions.auth.login.logOut());
    }

    return (
        <div className='nav_container'>
            <nav className='nav_content'>
                <Icon src={logoHeader} alt='Logo de header.' width={44} />
                <div className={`nav_menu ${toggle && 'active'}`}>
                    <ul className='nav_menu_ul'>
                        {/* Rerrorer el menu de rutas dinámicas */}
                        {
                            routes.map(({ name, to }: _Routes) => (
                                <li key={name} className={`nav_li ${window.location.pathname === to && 'active'}`}>
                                    <NavLink
                                        className={({ isActive }) => isActive ? "nav_link active" : "nav_link"}
                                        onClick={() => setToggle(false)}
                                        to={to}
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
                        fontSize={14}
                        height={36}
                        onClick={() => logOut()}
                        text='Cerrar sesión'
                        textAlign='center'
                        width={120}
                        margin={12}
                    />
                </div>
                <Icon
                    alt='Menu de opciones.'
                    className='nav_menu_icon'
                    onClick={() => setToggle((active) => !active)}
                    src={menu}
                    width={30}
                />
            </nav>
        </div>
    )
}

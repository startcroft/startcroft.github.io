import './Menu.scss'
import { NavLink, useLocation } from 'react-router-dom'
import pluma from '../assets/pluma.png'

export const Menu = () => {
    const location = useLocation();

    const menuItems = [
        { path: '/', label: 'Inicio' },
        { path: '/projects', label: 'Proyectos' },
        { path: '/about', label: 'Sobre mi' },
      ];

    return (
        <>
        <div className="Menu">
            {menuItems.map((item) => (
                <NavLink
                key={item.path}
                to={item.path}
                className= {`Menu__a ${location.pathname === item.path ? 'active' : ''}`}
                >
                {item.label}
                {location.pathname === item.path && <img src={pluma}/>}
                </NavLink>
            ))}
        </div>
        </>
    )
}

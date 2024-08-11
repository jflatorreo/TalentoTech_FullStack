import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Layout({ children }) {
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        navigate('/login');
    };

    return (
        <div className="app-container">
            <div className="sidebar">
                <nav>
                    <Link to="/">Inicio</Link>
                    <Link to="/about">Acerca de</Link>
                    <Link to="/users">Usuarios</Link>
                    {isAuthenticated && <Link to="/admin">Admin</Link>}
                </nav>
                {isAuthenticated && (
                    <button className="logout-button" onClick={handleLogout}>
                        Cerrar sesión
                    </button>
                )}
            </div>
            <div className="main-content">
                {children}
            </div>
        </div>
    );
}

export default Layout;
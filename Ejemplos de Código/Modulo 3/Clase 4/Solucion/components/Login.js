import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/admin');
    };

    return (
        <>
            <Helmet>
                <title>Login - Mi App</title>
            </Helmet>
            <div className="card">
                <h1>Iniciar Sesión</h1>
                <button onClick={handleLogin}>Iniciar Sesión</button>
            </div>
        </>
    );
}

export default Login;
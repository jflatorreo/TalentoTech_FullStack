import React from 'react';
import { Helmet } from 'react-helmet';

function Home() {
    return (
        <>
            <Helmet>
                <title>Inicio - Mi App</title>
            </Helmet>
            <div className="card">
                <h1>Bienvenido a la página de inicio</h1>
                <p>Curso Full Stack - Talento Tech 2024</p>
            </div>
        </>
    );
}

export default Home;
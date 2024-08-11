import React from 'react';
import { Helmet } from 'react-helmet';

function Admin() {
    return (
        <>
            <Helmet>
                <title>Admin - Mi App</title>
            </Helmet>
            <h1>Panel de Administración</h1>
        </>
    );
}

export default Admin;
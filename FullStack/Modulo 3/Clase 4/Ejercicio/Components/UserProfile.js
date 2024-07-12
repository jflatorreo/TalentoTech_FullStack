import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // TODO: Implementar la carga de datos de usuarios
    }, []);

    return (
        <>
            {/* TODO: Implementar el componente Helmet para el título de la página */}
            <h1>Lista de Usuarios</h1>
            {/* TODO: Mapear y mostrar la lista de usuarios */}
            {/* TODO: Implementar enlaces a los perfiles de usuario individuales */}
        </>
    );
}

export default UserList;
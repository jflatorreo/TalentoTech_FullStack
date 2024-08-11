import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Simula una carga de datos
        setTimeout(() => {
            setUsers([{ id: 1, name: 'Usuario 1' }, { id: 2, name: 'Usuario 2' }]);
        }, 1000);
    }, []);

    return (
        <>
            <Helmet>
                <title>Usuarios - Mi App</title>
            </Helmet>
            <h1>Lista de Usuarios</h1>
            {users.map(user => (
                <div key={user.id}>
                    <Link to={`/users/${user.id}`}>{user.name}</Link>
                </div>
            ))}
        </>
    );
}

export default UserList;
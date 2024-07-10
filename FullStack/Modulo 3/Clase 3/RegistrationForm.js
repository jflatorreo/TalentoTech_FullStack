import React, { useState } from 'react';

function RegistrationForm() {
const [formData, setFormData] = useState({
name: '',
email: '',
password: ''
});

const handleChange = (event) => {
const { name, value } = event.target;
setFormData(prevData => ({
...prevData,
[name]: value
}));
};

const handleSubmit = (event) => {
event.preventDefault();
console.log('Datos del formulario:', formData);
// Aquí iría la lógica para enviar los datos al servidor
};

return (
<form onSubmit={handleSubmit}>
    <div>
        <label htmlFor="name">Nombre:</label>
        <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
        />
    </div>
    <div>
        <label htmlFor="email">Email:</label>
        <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
        />
    </div>
    <div>
        <label htmlFor="password">Contraseña:</label>
        <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
        />
    </div>
    <button type="submit">Registrarse</button>
</form>
);
}

export default RegistrationForm;
import React, { useState } from 'react';

function RegistrationForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
        // Validación en tiempo real
        validateField(name, value);
    };

    const validateField = (name, value) => {
        let error = '';
        switch (name) {
            case 'name':
                if (!value.trim()) error = "El nombre es requerido";
                break;
            case 'email':
                if (!value.includes('@')) error = "Email inválido";
                break;
            case 'password':
                if (value.length < 6) error = "La contraseña debe tener al menos 6 caracteres";
                break;
            default:
                break;
        }
        setErrors(prev => ({...prev, [name]: error}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            console.log('Formulario válido, enviando datos:', formData);
            // Aquí iría la lógica para enviar los datos al servidor
        } else {
            console.log('Formulario inválido');
        }
    };

    const validateForm = () => {
        let isValid = true;
        Object.keys(formData).forEach(key => {
            validateField(key, formData[key]);
            if (errors[key]) isValid = false;
        });
        return isValid;
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
                {errors.name && <span className="error">{errors.name}</span>}
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
                {errors.email && <span className="error">{errors.email}</span>}
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
                {errors.password && <span className="error">{errors.password}</span>}
            </div>
            <button type="submit">Registrarse</button>
        </form>
    );
}

export default RegistrationForm;
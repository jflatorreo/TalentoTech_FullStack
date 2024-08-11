import React, { useState, useRef } from "react";

function Validator() {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const EmailResult = useRef(null);
    const PasswordResult = useRef(null);

    const validateEmail = (newEmail) => {
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (re.test(newEmail)) {
            setEmailError("Correo Válido");
        } else {
            setEmailError("Correo Inválido");
        }
        EmailResult.current.innerHTML = emailError; // Actualiza el mensaje aquí
    };

    const validatePassword = (newPassword) => {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (re.test(newPassword)) {
            setPasswordError("Contraseña Válida");
        } else {
            setPasswordError("Contraseña Inválida");
        }
        PasswordResult.current.innerHTML = passwordError; // Actualiza el mensaje aquí
    };

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        validateEmail(newEmail);
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        validatePassword(newPassword);
    };

    return (
        <div>
            <div ref={EmailResult}></div>
            <input type="text" onChange={handleEmailChange} />
            <input type="password" onChange={handlePasswordChange} />
            <div ref={PasswordResult}></div>
        </div>
    );
}

export default Validator;

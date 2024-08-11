import React, { useRef, useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import './EventRegistration.css';

const EventRegistration = () => {
    const { register, handleSubmit, control, setValue, watch } = useForm({
        defaultValues: {
            name: '',
            email: '',
            ticketType: 'standard',
            bio: '',
            dietary: '',
            agreement: false,
            selectedPoints: []
        }
    });

    const canvasRef = useRef(null);
    const selectedPoints = watch('selectedPoints');

    useEffect(() => {
        drawCanvas();
    }, [selectedPoints]);

    const drawCanvas = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = '#000';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);

        selectedPoints.forEach(point => {
            ctx.fillStyle = '#3498db';
            ctx.beginPath();
            ctx.arc(point.x, point.y, 5, 0, 2 * Math.PI);
            ctx.fill();
        });
    };

    const handleCanvasClick = (e) => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setValue('selectedPoints', [...selectedPoints, { x, y }]);
    };

    const onSubmit = (data) => {
        console.log('Datos del formulario:', data);
        alert('Registro exitoso! Revisa la consola para ver los detalles.');
    };

    return (
        <div className="event-registration">
            <h1>Registro para el Evento Tech Innovators 2025</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-section controlled">
                    <h2>Información Personal</h2>
                    <input
                        {...register('name', { required: true })}
                        placeholder="Nombre completo"
                    />
                    <input
                        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                        placeholder="Correo electrónico"
                    />
                    <select {...register('ticketType')}>
                        <option value="standard">Entrada Estándar</option>
                        <option value="vip">Entrada VIP</option>
                        <option value="premium">Entrada Premium</option>
                    </select>
                </div>

                <div className="form-section uncontrolled">
                    <h2>Información Adicional</h2>
                    <textarea
                        {...register('bio')}
                        placeholder="Cuéntanos sobre ti y tu experiencia en tecnología"
                    />
                    <select {...register('dietary')}>
                        <option value="">Preferencias alimentarias</option>
                        <option value="none">Sin restricciones</option>
                        <option value="vegetarian">Vegetariano</option>
                        <option value="vegan">Vegano</option>
                        <option value="gluten-free">Sin gluten</option>
                    </select>
                    <label>
                        <input type="checkbox" {...register('agreement', { required: true })} />
                        Acepto los términos y condiciones
                    </label>
                </div>

                <div className="form-section interactive">
                    <h2>Selección de Puntos de Interés</h2>
                    <p>Haz clic en el cuadrado para seleccionar tus áreas de interés en el evento:</p>
                    <canvas
                        ref={canvasRef}
                        width={200}
                        height={200}
                        onClick={handleCanvasClick}
                        className="interest-canvas"
                    />
                    <p>Puntos seleccionados: {selectedPoints.length}</p>
                </div>

                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
};

export default EventRegistration;
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const TodoForm = ({ addTodo }) => {
     //ToDo: Estado para almacenar la nueva tarea.

    // Manejador del evento de submit del formulario.
    const handleSubmit = (e) => {
         // ToDo: Prevenir la recarga de la página.
        if (task.trim()) {
             //ToDo: Llamar a la función addTodo con la nueva tarea.
             // ToDo:Limpiar el input.
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Agregar nueva tarea"
                    value={} // ToDo: Vincular el input al estado.
                    onChange={(e) => {} } // Actualizar el estado con el valor del input.
                />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-2">
                Agregar
            </Button>
        </Form>
    );
};

export default TodoForm;

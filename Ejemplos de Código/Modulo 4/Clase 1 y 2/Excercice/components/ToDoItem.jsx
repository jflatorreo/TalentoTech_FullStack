import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
    return (
        <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <span style={{}}> //ToDo: Mostrar la tarea, tachada si está completada //
        {todo.task} {}
      </span>
            <div>
                 // ToDo: Botón para marcar/desmarcar todo.completed ?
                <Button variant="danger" onClick={() => removeTodo(todo.id)}>
                    Eliminar {/* Botón para eliminar */}
                </Button>
            </div>
        </ListGroup.Item>
    );
};

export default TodoItem;

import React from 'react';
import { ListGroup } from 'react-bootstrap';
import TodoItem from './ToDoItem';

const TodoList = ({ todos, toggleComplete, removeTodo }) => {
    return (
        <ListGroup>
            {todos.map((todo) => (
                <TodoItem
                     // ToDo: Clave única para cada ítem.
                     // ToDo: Pasar la tarea al componente TodoItem.
                     // ToDo: Pasar la función para marcar/desmarcar.
                     // ToDo: Pasar la función para eliminar.
                />
            ))}
        </ListGroup>
    );
};

export default TodoList;

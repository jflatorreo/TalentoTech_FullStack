import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
    //ToDo:  Estado para almacenar la lista de tareas.

    const addTodo = (task) => {
        const newTodo = {
            id: , // ToDo: Generar un ID único.
            task,
            completed: false,
        };
         //ToDo:  Actualizar el estado con la nueva tarea setTodos.
    };

    const toggleComplete = (id) => {
        setTodos(
             /* ToDo:  Actualizar el estado de completado. Pista: todos.map((todo) =>
                                                                    todo.id === id ? { ...todo, completar aqui } : */
    )
            )
        );
    };

    const removeTodo = (id) => {
         //ToDo: Filtrar las tareas eliminadas.
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md="6">
                    <Card>
                        <Card.Body>
                            <Card.Title>Lista de Tareas</Card.Title>
                             {/*ToDo: Formulario para agregar tareas */}
                             {/* ToDo: Lista de tareas */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default App;

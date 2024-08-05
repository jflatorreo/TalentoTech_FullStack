import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const response = await axios.get('http://localhost:5000/api/todos');
        setTodos(response.data);
    };

    const addTodo = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/todos', { text: newTodo });
        setNewTodo('');
        fetchTodos();
    };

    const toggleTodo = async (id, completed) => {
        await axios.put(`http://localhost:5000/api/todos/${id}`, { completed: !completed });
        fetchTodos();
    };

    const deleteTodo = async (id) => {
        await axios.delete(`http://localhost:5000/api/todos/${id}`);
        fetchTodos();
    };

    return (
        <div className="App">
            <h1>Lista de Tareas</h1>
            <form onSubmit={addTodo}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Nueva tarea"
                />
                <button type="submit">Agregar</button>
            </form>
            <ul className="task-list">
                {todos.map((todo) => (
                    <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id, todo.completed)}
                        />
                        {todo.text}
                        <button className="delete" onClick={() => deleteTodo(todo.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
            <div className="pending-count">
                {todos.filter(todo => !todo.completed).length} tareas pendientes
            </div>
        </div>
    );
}

export default App;
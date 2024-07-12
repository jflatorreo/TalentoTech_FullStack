import React,{Suspense} from 'react';
import { useLocation,BrowserRouter, Routes, Route, Navigate, useNavigate, Link, useParams } from 'react-router-dom';
import Layout from './Components/Layout';
import routes from './routes';
import './App.css';
import About from "./Components/About";

function UserProfile(){
    const location = useLocation();
    console.log(location.pathname)
}

function Login(){
    const navigate = useNavigate();

    const handlerSubmit = (event) => {
        event.preventDefault();
        navigate("/userprofile");
    }

    return (
        <form onSubmit={handlerSubmit}>
            <button type="submit">Iniciar sesión</button>
        </form>
    )
}

function ProtectedRoute({child, Roles}){
    const location = useLocation();
    const UserRole= getUserRole();

    if (!userAllowed){
        return <Navigate to="/access-denied" replace={true} state={{from:location}}></Navigate>
    }
    if (!Roles.include(userRole)){
        return <Navigate to="/access-denied" replace={true} state={{from:location}}></Navigate>
    }
    return child;

}

function App() {
    return (

    // TODO: Implementar el enrutador (BrowserRouter)
    // TODO: Implementar el componente Layout
    // TODO: Configurar las rutas usando el componente Routes
    // TODO: Mapear las rutas desde el archivo routes.js
    // TODO: Agregar una ruta por defecto que redirija a la página principal

}

export default App;
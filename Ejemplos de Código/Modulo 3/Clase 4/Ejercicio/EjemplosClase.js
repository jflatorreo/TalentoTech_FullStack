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
function PreLoader ({to,componente}){
    const navigate=useNavigate();
    const handlerMouseEnter = () =>{
        fetch(`http://api...${to}`)
            .then(response => response.json())
            .then( data => {
                    const PreLoadedData = data;
                }
            );
    }
    return (
        <link to={to} onMouseEnter={handlerMouseEnter}>
            {componente}
        </link>
    )
}
function App() {
    return (
        <BrowserRouter>
            <Link to="/">Home</Link>
            <Link to="/about">Acerca de</Link>

            <Routes>

                <Route path="*" element={NotFound}>
                    <Navigate to="/new-path" replace={true}/>
                </Route>
                <Route path={componteCalculaRuta} element={<Navigate to="/new-path"/>} />

                <Route path="/" element={<Home />}>
                    <Route path="info" element={<Info />}></Route>
                </Route>
                <Suspense fallback={<div>Cargando...</div>}>
                    <Route path="/about" element={<ProtectedRoute Roles={["admin","usuario"]}><About /></ProtectedRoute>}></Route>
                </Suspense>
            </Routes>

        </BrowserRouter>
    );
}

export default App;
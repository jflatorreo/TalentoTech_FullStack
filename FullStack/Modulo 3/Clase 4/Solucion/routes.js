import React from 'react';
import Home from './components/Home';
import About from './components/About';
import UserList from './components/UserList';
import UserProfile from './components/UserProfile';
import Admin from './components/Admin/Admin';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';

const routes = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/users', element: <UserList /> },
    { path: '/users/:id', element: <UserProfile /> },
    { path: '/admin', element: <ProtectedRoute><Admin /></ProtectedRoute> },
    { path: '/login', element: <Login /> },
];

export default routes;
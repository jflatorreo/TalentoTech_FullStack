// App.js
import React from 'react';

function App() {
    return (
        // Utilizamos clases de Tailwind para estilizar el contenedor principal
        <div className="container mx-auto px-4 py-8">
            {/* Título con clases personalizadas de Tailwind */}
            <h1 className="text-4xl font-bold text-blue-600 mb-4">
                Bienvenido a nuestra tienda
            </h1>
            {/* Párrafo con estilos de texto y espaciado */}
            <p className="text-gray-700 leading-relaxed mb-6">
                Descubre nuestros productos únicos y de alta calidad.
            </p>
            {/* Botón estilizado con Tailwind, incluyendo estados hover y focus */}
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Explorar ahora
            </button>
        </div>
    );
}

export default App;
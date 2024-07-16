import React, { useState } from 'react';

function ThemeToggle() {
    // Estado para controlar el tema actual
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Función para alternar el tema
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        // Añadimos o removemos la clase 'dark' del elemento html
        document.documentElement.classList.toggle('dark');
    };

    return (
        // Contenedor con clases que cambian según el tema
        <div className={`p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            {/* Título con color que cambia según el tema */}
            <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                Tema: {isDarkMode ? 'Oscuro' : 'Claro'}
            </h2>
            {/* Botón para cambiar el tema */}
            <button
                onClick={toggleTheme}
                className={`px-4 py-2 rounded ${
                    isDarkMode
                        ? 'bg-yellow-400 text-gray-800 hover:bg-yellow-300'
                        : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
            >
                Cambiar tema
            </button>
        </div>
    );
}

export default ThemeToggle;
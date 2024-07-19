// GradientText.js
import React from 'react';

// Definimos un componente que utiliza una utilidad personalizada para texto con gradiente
function GradientText({ children, from, to, direction = 'l' }) {
    // Creamos una clase personalizada para el gradiente
    const gradientClass = `bg-gradient-to-${direction} from-${from} to-${to} text-transparent bg-clip-text`;

    return (
        <span className={`${gradientClass} font-bold`}>
      {children}
    </span>
    );
}

// Ejemplo de uso
function App() {
    return (
        <div className="p-8">
            <h1 className="text-4xl mb-4">
                <GradientText from="purple-400" to="pink-600" direction="r">
                    Bienvenido a nuestra tienda
                </GradientText>
            </h1>
            <p className="text-gray-700">
                Descubre nuestros productos únicos y de alta calidad.
            </p>
        </div>
    );
}

export default App;
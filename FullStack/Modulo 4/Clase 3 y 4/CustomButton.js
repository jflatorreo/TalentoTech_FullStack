// CustomButton.js
import React from 'react';

// Definimos un componente de botón personalizado
function CustomButton({ children, variant = 'primary', size = 'medium' }) {
    // Mapeamos variantes a clases de Tailwind
    const variantClasses = {
        primary: 'bg-blue-500 hover:bg-blue-600 text-white',
        secondary: 'bg-gray-300 hover:bg-gray-400 text-gray-800',
        success: 'bg-green-500 hover:bg-green-600 text-white',
    };

    // Mapeamos tamaños a clases de Tailwind
    const sizeClasses = {
        small: 'py-1 px-2 text-sm',
        medium: 'py-2 px-4 text-base',
        large: 'py-3 px-6 text-lg',
    };

    // Combinamos las clases base con las clases de variante y tamaño
    const buttonClasses = `
    font-bold rounded focus:outline-none focus:shadow-outline
    ${variantClasses[variant]}
    ${sizeClasses[size]}
  `;

    return (
        <button className={buttonClasses}>
            {children}
        </button>
    );
}

export default CustomButton;
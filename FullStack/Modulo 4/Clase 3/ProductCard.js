// ProductCard.jsx
import React from 'react';

function ProductCard({ name, price, imageUrl }) {
    return (
        // Usamos clases específicas de Tailwind para optimizar la purga
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={imageUrl} alt={name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">
                    Precio: ${price}
                </p>
            </div>
            {/* Usamos clases dinámicas con un patrón que Tailwind puede detectar */}
            <div className={`px-6 pt-4 pb-2 ${price > 100 ? 'bg-red-100' : 'bg-green-100'}`}>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{price > 100 ? 'premium' : 'accesible'}
        </span>
            </div>
        </div>
    );
}

export default ProductCard;
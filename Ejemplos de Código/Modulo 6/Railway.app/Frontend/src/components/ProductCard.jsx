// components/ProductCard.js
import React from 'react';

function ProductCard({ product, openModal, addToCart }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
                <button
                    onClick={() => openModal(product)}
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors duration-300 mb-2"
                >
                    Ver detalles
                </button>
                <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors duration-300"
                >
                    Añadir al carrito
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
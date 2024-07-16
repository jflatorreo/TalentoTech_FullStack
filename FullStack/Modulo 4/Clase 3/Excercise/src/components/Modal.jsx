import React from 'react';

function Modal({ product, closeModal, addToCart }) {
    const handleAddToCart = () => {
        addToCart(product);
        closeModal();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4 rounded" />
                <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
                <p className="text-gray-700 mb-6"><a href={product.desc}>{product.desc}</a></p>
                <div className="flex justify-between">
                    <button
                        onClick={handleAddToCart}
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
                    >
                        Añadir al carrito
                    </button>
                    <button
                        onClick={closeModal}
                        className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition-colors duration-300"
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
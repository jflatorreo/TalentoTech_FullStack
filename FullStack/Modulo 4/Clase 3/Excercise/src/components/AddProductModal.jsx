import React, { useState } from 'react';

function AddProductModal({ closeModal, addProduct }) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct({ name, price: parseFloat(price), image });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4">Añadir Nuevo Producto</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2">Nombre del Producto</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block mb-2">Precio</label>
                        <input
                            type="number"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                            min="0"
                            step="0.01"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="image" className="block mb-2">URL de la Imagen</label>
                        <input
                            type="text"
                            id="image"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="flex justify-between">
                        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                            Añadir Producto
                        </button>
                        <button type="button" onClick={closeModal} className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400">
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddProductModal;
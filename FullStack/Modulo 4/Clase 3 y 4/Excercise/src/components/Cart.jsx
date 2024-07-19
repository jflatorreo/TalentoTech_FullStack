import React from 'react';

function Cart({ cart, closeCart, removeFromCart }) {
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>
                {cart.length === 0 ? (
                    <p>Tu carrito está vacío.</p>
                ) : (
                    <>
                        {cart.map(item => (
                            <div key={item.id} className="flex justify-between items-center mb-4">
                                <span>{item.name} - ${item.price.toFixed(2)}</span>
                                <button onClick={() => removeFromCart(item.id)} className="text-red-500">Eliminar</button>
                            </div>
                        ))}
                        <div className="border-t pt-4 mt-4">
                            <p className="font-bold">Total: ${total.toFixed(2)}</p>
                        </div>
                    </>
                )}
                <button onClick={closeCart} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    Cerrar
                </button>
            </div>
        </div>
    );
}

export default Cart;
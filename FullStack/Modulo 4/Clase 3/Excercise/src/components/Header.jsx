import React from 'react';

function Header({ cartItemCount, openCart, isLoggedIn, isAdmin, openLoginModal, logout, openAddProductModal }) {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-blue-600">Mi Tienda</h1>
                <nav>
                    <ul className="flex space-x-4 items-center">
                        <li><a href="#" className="text-gray-600 hover:text-blue-600">Inicio</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-blue-600">Productos</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-blue-600">Sobre nosotros</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-blue-600">Contacto</a></li>
                        <li>
                            <button onClick={openCart} className="text-gray-600 hover:text-blue-600">
                                Carrito ({cartItemCount})
                            </button>
                        </li>
                        {isLoggedIn ? (
                            <>
                                <li><button onClick={logout} className="text-gray-600 hover:text-blue-600">Cerrar sesión</button></li>
                                {isAdmin && (
                                    <li><button onClick={openAddProductModal} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Añadir Producto</button></li>
                                )}
                            </>
                        ) : (
                            <li><button onClick={openLoginModal} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Iniciar sesión</button></li>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
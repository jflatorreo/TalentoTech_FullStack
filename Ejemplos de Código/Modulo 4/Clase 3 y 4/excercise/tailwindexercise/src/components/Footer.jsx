import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-xl font-semibold mb-4">Mi Tienda</h3>
                        <p className="text-gray-400">Ofreciendo productos de calidad desde 2024.</p>
                    </div>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-xl font-semibold mb-4">Enlaces rápidos</h3>
                        <ul className="text-gray-400">
                            <li><a href="#" className="hover:text-white">Inicio</a></li>
                            <li><a href="#" className="hover:text-white">Productos</a></li>
                            <li><a href="#" className="hover:text-white">Sobre nosotros</a></li>
                            <li><a href="#" className="hover:text-white">Contacto</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                            <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                            <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center text-gray-400">
                    <p>&copy; 2023 Mi Tienda. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
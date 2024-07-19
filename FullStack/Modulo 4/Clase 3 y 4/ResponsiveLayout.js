import React from 'react';

function ResponsiveLayout() {
    return (
        <div className="container mx-auto px-4">
            {/* Grid que cambia de 1 columna en móvil a 3 en desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Elementos que cambian de tamaño y estilo según el breakpoint */}
                <div className="bg-blue-200 p-4 md:p-6 lg:p-8 rounded">
                    <h2 className="text-lg md:text-xl lg:text-2xl font-bold">Título 1</h2>
                    <p className="text-sm md:text-base lg:text-lg">Contenido adaptativo</p>
                </div>
                <div className="bg-green-200 p-4 md:p-6 lg:p-8 rounded">
                    <h2 className="text-lg md:text-xl lg:text-2xl font-bold">Título 2</h2>
                    <p className="text-sm md:text-base lg:text-lg">Contenido adaptativo</p>
                </div>
                <div className="bg-red-200 p-4 md:p-6 lg:p-8 rounded">
                    <h2 className="text-lg md:text-xl lg:text-2xl font-bold">Título 3</h2>
                    <p className="text-sm md:text-base lg:text-lg">Contenido adaptativo</p>
                </div>
            </div>

            {/* Elemento que cambia de orientación en diferentes breakpoints */}
            <div className="mt-8 flex flex-col md:flex-row items-center">
                <img src="product.jpg" alt="Producto" className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4" />
                <div>
                    <h3 className="text-xl font-bold mb-2">Nombre del Producto</h3>
                    <p className="text-gray-600">Descripción del producto que se adapta al layout.</p>
                </div>
            </div>
        </div>
    );
}

export default ResponsiveLayout;
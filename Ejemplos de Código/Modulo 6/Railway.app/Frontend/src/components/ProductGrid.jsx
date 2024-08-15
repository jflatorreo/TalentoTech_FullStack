import React from 'react';
import ProductCard from './ProductCard';




function ProductGrid({ products, openModal, addToCart }) {
    if (products.length === 0) {
        return <p className="text-center text-gray-500">No se encontraron productos.</p>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                    openModal={openModal}
                    addToCart={addToCart}
                />
            ))}
        </div>
    );
}

export default ProductGrid;
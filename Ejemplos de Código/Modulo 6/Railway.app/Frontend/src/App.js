import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Cart from './components/Cart';
import LoginModal from './components/LoginModal';
import AddProductModal from './components/AddProductModal';
import SearchBar from "./components/SearchBar";

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
console.log(API_URL);

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${API_URL}/products`);
            if (Array.isArray(response.data)) {
                setProducts(response.data);
            } else {
                console.error('Expected an array of products, but got:', response.data);
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        const results = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(results);
    }, [searchTerm, products]);

    const openModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    const register = async (username, password) => {
        try {
            await axios.post(API_URL+'/users/register', { username, password });
            alert('Registro exitoso. Por favor, inicia sesión.');
            setIsLoginModalOpen(true);
        } catch (error) {
            alert('Error en el registro: ' + error.response.data.message);
        }
    };

    const login = async (username, password) => {
        try {
            const response = await axios.post(API_URL+'/users/login', { username, password });
            setIsLoggedIn(true);
            setIsAdmin(response.data.isAdmin);
            console.log(response.data)
            setIsLoginModalOpen(false);
            localStorage.setItem('token', response.data.token);
        } catch (error) {
            alert('Error en el inicio de sesión: ' + error.response.data.message);
        }
    };

    const logout = () => {
        setIsLoggedIn(false);
        setIsAdmin(false);
    };

    const addProduct = async (newProduct) => {
        try {
            const response = await axios.post(API_URL+'/products', newProduct);
            setProducts([...products, response.data]);
            setIsAddProductModalOpen(false);
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header
                cartItemCount={cart.length}
                openCart={() => setIsCartOpen(true)}
                isLoggedIn={isLoggedIn}
                isAdmin={isAdmin}
                openLoginModal={() => setIsLoginModalOpen(true)}
                logout={logout}
                openAddProductModal={() => setIsAddProductModalOpen(true)}
            />


            <main className="flex-grow container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                    Nuestra Colección
                </h1>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <ProductGrid products={filteredProducts} openModal={openModal} addToCart={addToCart} />
            </main>
            <Footer />
            {isModalOpen && (
                <Modal product={selectedProduct} closeModal={() => setIsModalOpen(false)} addToCart={addToCart} />
            )}
            {isCartOpen && (
                <Cart cart={cart} closeCart={() => setIsCartOpen(false)} removeFromCart={removeFromCart} />
            )}
            {isLoginModalOpen && (
                <LoginModal
                    closeModal={() => setIsLoginModalOpen(false)}
                    login={login}
                    register={register}
                />
            )}
            {isAddProductModalOpen && (
                <AddProductModal closeModal={() => setIsAddProductModalOpen(false)} addProduct={addProduct} />
            )}
        </div>
    );
}

export default App;

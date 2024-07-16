import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Cart from './components/Cart';
import LoginModal from './components/LoginModal';
import AddProductModal from './components/AddProductModal';
import SearchBar from "./components/SearchBar";
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
    const [products, setProducts] = useState([

        { id: 1, name: 'Producto 1', price: 80000, desc: 'https://www.facebook.com/DecoarteAngel/', image: 'https://scontent.feyp1-1.fna.fbcdn.net/v/t1.6435-9/96127933_954585274980473_1006534338960949248_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f798df&_nc_ohc=3diW5TsuT74Q7kNvgH9TbOF&_nc_ht=scontent.feyp1-1.fna&oh=00_AYDI8b4AylniRJX_ZVlt031ashT-kBBNEYqBjNeYjSjHNw&oe=66BE21ED' },
        { id: 2, name: 'Producto 2', price: 70000, desc: 'https://www.facebook.com/DecoarteAngel/', image: 'https://scontent.feyp1-1.fna.fbcdn.net/v/t1.6435-9/94706891_944481189324215_1954995892536737792_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f798df&_nc_ohc=tjFvfQ4JMrQQ7kNvgHNdOiR&_nc_ht=scontent.feyp1-1.fna&oh=00_AYAAE1mirlSTa3Hl7xmh7VbfXnkoa-ldeerbuDRxwKSgUw&oe=66BE2A95' },
        { id: 3, name: 'Producto 3', price: 55000, desc: 'https://www.facebook.com/DecoarteAngel/',image: 'https://scontent.feyp1-1.fna.fbcdn.net/v/t1.6435-9/51078286_631415450630792_6816015302346670080_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd6889&_nc_ohc=P7O-YCRrk0IQ7kNvgH5AVec&_nc_ht=scontent.feyp1-1.fna&oh=00_AYAjm4giWMy_S5jrQHhspRCEKjYtZW7mhy67mhODJrj0YQ&oe=66BE2940' },
        // ... más productos

    ]);
    const [users, setUsers] = useState([
        { username: 'admin', password: 'admin123', isAdmin: true },
        { username: 'user', password: 'user123', isAdmin: false }
    ]);

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

    const register = (username, password) => {
        const userExists = users.some(user => user.username === username);
        if (userExists) {
            alert('El nombre de usuario ya existe. Por favor, elige otro.');
        } else {
            const newUser = { username, password, isAdmin: false };
            setUsers([...users, newUser]);
            setIsLoggedIn(true);
            setIsAdmin(false);
            setIsLoginModalOpen(false);
            alert('Registro exitoso. Has iniciado sesión automáticamente.');
        }
    };

    const login = (username, password) => {
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            setIsLoggedIn(true);
            setIsAdmin(user.isAdmin);
            setIsLoginModalOpen(false);
        } else {
            alert('Credenciales incorrectas');
        }
    };

    const logout = () => {
        setIsLoggedIn(false);
        setIsAdmin(false);
    };

    const addProduct = (newProduct) => {
        setProducts([...products, { ...newProduct, id: products.length + 1 }]);
        setIsAddProductModalOpen(false);
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

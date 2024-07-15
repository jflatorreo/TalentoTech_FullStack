import React, { useState, useEffect } from 'react';
import {
    Container, Row, Col, Card, Button, Modal, Form,
    Navbar, Nav, InputGroup, FormControl,
    Pagination, OverlayTrigger, Tooltip
} from 'react-bootstrap';
import { FaShoppingCart, FaSearch, FaStar, FaStarHalfAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // archivo para estilos personalizados

function App() {
    const [products, setProducts] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '', image: '', category: '' });
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(8);
    const [showProductDetail, setShowProductDetail] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            const dummyProducts = [
                { id: 1, name: 'Smartphone X', price: 599.99, description: 'Último modelo con cámara de alta resolución', image: 'https://via.placeholder.com/300', category: 'Electrónica', rating: 4.5 },
                { id: 2, name: 'Laptop Pro', price: 1299.99, description: 'Potente laptop para profesionales', image: 'https://via.placeholder.com/300', category: 'Computadoras', rating: 5 },
                { id: 3, name: 'Auriculares Inalámbricos', price: 149.99, description: 'Sonido premium con cancelación de ruido', image: 'https://via.placeholder.com/300', category: 'Accesorios', rating: 4 },
                // Añade más productos aquí...
            ];
            setProducts(dummyProducts);
        };
        fetchProducts();
    }, []);

    const handleShowAddModal = () => setShowAddModal(true);
    const handleCloseAddModal = () => setShowAddModal(false);

    const handleNewProductChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleAddProduct = () => {
        const productToAdd = {
            id: products.length + 1,
            ...newProduct,
            price: parseFloat(newProduct.price),
            rating: 0
        };
        setProducts([...products, productToAdd]);
        setNewProduct({ name: '', price: '', description: '', image: '', category: '' });
        handleCloseAddModal();
    };

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const renderRatingStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<FaStar key={i} className="fa-star" />);
            } else if (i - 0.5 <= rating) {
                stars.push(<FaStarHalfAlt key={i} className="fa-star" />);
            } else {
                stars.push(<FaStar key={i} className="text-secondary" />);
            }
        }
        return stars;
    };

    const handleShowProductDetail = (product) => {
        setSelectedProduct(product);
        setShowProductDetail(true);
    };

    return (
        <>
            <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">Vitrina Comercial</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Inicio</Nav.Link>
                            <Nav.Link href="#products">Productos</Nav.Link>
                            <Nav.Link href="#about">Acerca de</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <InputGroup>
                                <FormControl
                                    type="search"
                                    placeholder="Buscar productos..."
                                    className="mr-2"
                                    aria-label="Search"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <Button variant="outline-light"><FaSearch /></Button>
                            </InputGroup>
                        </Form>
                        <OverlayTrigger
                            placement="bottom"
                            overlay={<Tooltip id="cart-tooltip">Ver carrito</Tooltip>}
                        >
                            <Button
                                variant="outline-light"
                                className="ms-2"
                                onClick={() => setShowCart(true)}
                            >
                                <FaShoppingCart /> ({cart.length})
                            </Button>
                        </OverlayTrigger>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className="mt-5">
                <Row className="mb-3">
                    <Col>
                        <h2>Nuestros Productos</h2>
                    </Col>
                    <Col xs="auto">
                        <Button className="btn-custom" variant="success" onClick={handleShowAddModal}>
                            Agregar Producto
                        </Button>
                    </Col>
                </Row>

                <Row>
                    {currentProducts.map((product) => (
                        <Col key={product.id} md={3} className="mb-4">
                            <Card className="h-100">
                                <Card.Img variant="top" src={product.image} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>${product.price.toFixed(2)}</Card.Text>
                                    <div className="mb-2">
                                        {renderRatingStars(product.rating)}
                                    </div>
                                    <Button variant="primary" onClick={() => handleShowProductDetail(product)}>
                                        Ver detalles
                                    </Button>
                                    <Button variant="success" className="ms-2" onClick={() => addToCart(product)}>
                                        Añadir al carrito
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <Pagination className="justify-content-center mt-4">
                    {[...Array(Math.ceil(filteredProducts.length / productsPerPage))].map((_, index) => (
                        <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                            {index + 1}
                        </Pagination.Item>
                    ))}
                </Pagination>
            </Container>

            <footer className="bg-dark text-light py-4 mt-5">
                <Container>
                    <Row>
                        <Col md={4}>
                            <h5>Enlaces</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-light">Inicio</a></li>
                                <li><a href="#" className="text-light">Productos</a></li>
                                <li><a href="#" className="text-light">Acerca de</a></li>
                            </ul>
                        </Col>
                        <Col md={4}>
                            <h5>Contacto</h5>
                            <p>Email: info@vitrinacomercial.com</p>
                            <p>Teléfono: (123) 456-7890</p>
                        </Col>
                        <Col md={4}>
                            <h5>Síguenos</h5>
                            <div>
                                <FaFacebook className="me-3" />
                                <FaTwitter className="me-3" />
                                <FaInstagram />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>

            <Modal show={showAddModal} onHide={handleCloseAddModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar Nuevo Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={newProduct.name}
                                onChange={handleNewProductChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control
                                type="number"
                                name="price"
                                value={newProduct.price}
                                onChange={handleNewProductChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="description"
                                value={newProduct.description}
                                onChange={handleNewProductChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>URL de la imagen</Form.Label>
                            <Form.Control
                                type="text"
                                name="image"
                                value={newProduct.image}
                                onChange={handleNewProductChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Categoría</Form.Label>
                            <Form.Control
                                type="text"
                                name="category"
                                value={newProduct.category}
                                onChange={handleNewProductChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAddModal}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleAddProduct}>
                        Guardar Producto
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showCart} onHide={() => setShowCart(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Carrito de Compras</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {cart.length === 0 ? (
                        <p>Tu carrito está vacío.</p>
                    ) : (
                        cart.map(item => (
                            <div key={item.id} className="d-flex justify-content-between align-items-center mb-2">
                                <span>{item.name} - ${item.price.toFixed(2)}</span>
                                <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
                                    Eliminar
                                </Button>
                            </div>
                        ))
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowCart(false)}>
                        Cerrar
                    </Button>
                    <Button variant="primary">
                        Proceder al pago (${cart.reduce((total, item) => total + item.price, 0).toFixed(2)})
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showProductDetail} onHide={() => setShowProductDetail(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedProduct?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedProduct && (
                        <>
                            <img src={selectedProduct.image} alt={selectedProduct.name} className="img-fluid mb-3" />
                            <p>{selectedProduct.description}</p>
                            <p>Precio: ${selectedProduct.price.toFixed(2)}</p>
                            <p>Categoría: {selectedProduct.category}</p>
                            <div>{renderRatingStars(selectedProduct.rating)}</div>
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowProductDetail(false)}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={() => addToCart(selectedProduct)}>
                        Añadir al carrito
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default App;
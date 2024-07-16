import React, { useState } from 'react';
import { Container, Row, Col, Carousel, Button, Badge, Form, Modal } from 'react-bootstrap';

function ProductPage() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container className="my-5">
            <Row>
                <Col md={6}>
                    {/* Carousel para mostrar imágenes del producto */}
                    <Carousel>
                        <Carousel.Item>
                            <img className="d-block w-100" src="https://picsum.photos/600/400?random=1" alt="First slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src="https://picsum.photos/600/400?random=2" alt="Second slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src="https://picsum.photos/600/400?random=3" alt="Third slide" />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col md={6}>
                    <h2>Producto Increíble <Badge bg="success">Nuevo</Badge></h2>
                    <p className="lead">Este es un producto asombroso que cambiará tu vida.</p>
                    <h3>$99.99</h3>
                    <Button variant="primary" size="lg" className="mt-3" onClick={handleShow}>
                        Comprar Ahora
                    </Button>
                </Col>
            </Row>

            {/* Modal para el formulario de compra */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Completar Compra</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese su nombre" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese su email" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Dirección de Envío</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Confirmar Compra
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default ProductPage;
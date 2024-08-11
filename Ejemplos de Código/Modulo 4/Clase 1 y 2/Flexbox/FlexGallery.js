import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const images = [
    'https://picsum.photos/300/200?random=1',
    'https://picsum.photos/300/200?random=2',
    'https://picsum.photos/300/200?random=3',
    'https://picsum.photos/300/200?random=4',
    'https://picsum.photos/300/200?random=5',
    'https://picsum.photos/300/200?random=6',
];

function FlexGallery() {
    return (
        <Container>
            <h1 className="text-center my-4">Galería Flexible</h1>
            {/* Usamos d-flex para crear un contenedor flexible */}
            <Row className="d-flex flex-wrap justify-content-around">
                {images.map((img, index) => (
                    <Col xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex align-items-stretch" key={index}>
                        <div className="card">
                            {/* La imagen se ajustará al tamaño de la card */}
                            <Image src={img} fluid className="card-img-top" />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Imagen {index + 1}</h5>
                                <p className="card-text">Esta es una breve descripción de la imagen.</p>
                                {/* mt-auto empuja el botón hacia abajo */}
                                <a href="#" className="btn btn-primary mt-auto">Ver más</a>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default FlexGallery;
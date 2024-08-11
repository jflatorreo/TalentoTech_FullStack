import React from 'react';
import { Container, Row, Col, Image, Card, ProgressBar } from 'react-bootstrap';

function UserProfile() {
    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="border-0 shadow">
                        <Card.Body>
                            <div className="text-center mb-4">
                                {/* Imagen de perfil circular */}
                                <Image src="https://picsum.photos/200" roundedCircle className="mb-3" style={{ width: '150px', height: '150px' }} />
                                <h2 className="mb-0">Jane Doe</h2>
                                <p className="text-muted">Desarrolladora Web</p>
                            </div>

                            {/* Utilidades de texto */}
                            <p className="lead text-center mb-4">
                                Apasionada por crear experiencias web increíbles y resolver problemas complejos.
                            </p>

                            <h4 className="mb-3">Habilidades</h4>
                            {/* Barras de progreso con diferentes variantes de color */}
                            <div className="mb-2">
                                <span className="fw-bold">HTML/CSS</span>
                                <ProgressBar variant="success" now={90} label={`90%`} className="mt-1" />
                            </div>
                            <div className="mb-2">
                                <span className="fw-bold">JavaScript</span>
                                <ProgressBar variant="info" now={85} label={`85%`} className="mt-1" />
                            </div>
                            <div className="mb-2">
                                <span className="fw-bold">React</span>
                                <ProgressBar variant="warning" now={80} label={`80%`} className="mt-1" />
                            </div>
                            <div className="mb-4">
                                <span className="fw-bold">Node.js</span>
                                <ProgressBar variant="danger" now={75} label={`75%`} className="mt-1" />
                            </div>

                            {/* Utilidades de espaciado y borde */}
                            <div className="d-flex justify-content-between border-top pt-3">
                                <div className="text-center">
                                    <h5 className="mb-0">Proyectos</h5>
                                    <span className="text-muted">23</span>
                                </div>
                                <div className="text-center">
                                    <h5 className="mb-0">Seguidores</h5>
                                    <span className="text-muted">1,458</span>
                                </div>
                                <div className="text-center">
                                    <h5 className="mb-0">Valoración</h5>
                                    <span className="text-muted">4.9/5</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default UserProfile;
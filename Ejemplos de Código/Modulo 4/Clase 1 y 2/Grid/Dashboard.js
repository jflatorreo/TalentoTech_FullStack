import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Datos de ejemplo para el gráfico
const data = [
    { name: 'Ene', ventas: 4000, gastos: 2400 },
    { name: 'Feb', ventas: 3000, gastos: 1398 },
    { name: 'Mar', ventas: 2000, gastos: 9800 },
    { name: 'Abr', ventas: 2780, gastos: 3908 },
    { name: 'May', ventas: 1890, gastos: 4800 },
    { name: 'Jun', ventas: 2390, gastos: 3800 },
];

function Dashboard() {
    return (
        <Container fluid> {/* Container fluid para ocupar todo el ancho */}
            <Row className="my-3">
                <Col>
                    <h1 className="text-center">Dashboard</h1>
                </Col>
            </Row>
            <Row>
                {/* Columna que ocupa todo el ancho en móviles, la mitad en tablets y un tercio en desktops */}
                <Col xs={12} md={6} lg={4} className="mb-3">
                    <Card>
                        <Card.Body>
                            <Card.Title>Ventas Totales</Card.Title>
                            <Card.Text className="display-4">$15,060</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4} className="mb-3">
                    <Card>
                        <Card.Body>
                            <Card.Title>Gastos Totales</Card.Title>
                            <Card.Text className="display-4">$26,106</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={12} lg={4} className="mb-3">
                    <Card>
                        <Card.Body>
                            <Card.Title>Clientes Nuevos</Card.Title>
                            <Card.Text className="display-4">356</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Ventas vs Gastos</Card.Title>
                            {/* Gráfico responsivo que se ajusta al ancho de la Card */}
                            <BarChart width={window.innerWidth * 0.9} height={300} data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="ventas" fill="#8884d8" />
                                <Bar dataKey="gastos" fill="#82ca9d" />
                            </BarChart>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Dashboard;
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Componente principal


// Componentes de ejercicios
const GridExercise = () => {
    const [code, setCode] = useState('');

    return (
        <div>
            <h2>Ejercicio de Grid</h2>
            <p>Crea una fila con tres columnas de igual ancho en pantallas medianas y grandes.</p>
            <textarea
                className="form-control mb-3"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Escribe tu código aquí..."
            />
            <div className="border p-3">
                <div className={code}>
                    <div className="border p-2">Columna 1</div>
                    <div className="border p-2">Columna 2</div>
                    <div className="border p-2">Columna 3</div>
                </div>
            </div>
        </div>
    );
};

const FlexboxExercise = () => {
    const [code, setCode] = useState('');

    return (
        <div>
            <h2>Ejercicio de Flexbox</h2>
            <p>Crea un contenedor flex que centre sus elementos vertical y horizontalmente.</p>
            <textarea
                className="form-control mb-3"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Escribe tu código aquí..."
            />
            <div className={`border p-3 ${code}`} style={{height: '200px'}}>
                <div className="border p-2">Elemento 1</div>
                <div className="border p-2">Elemento 2</div>
                <div className="border p-2">Elemento 3</div>
            </div>
        </div>
    );
};

const UtilitiesExercise = () => {
    const [code, setCode] = useState('');

    return (
        <div>
            <h2>Ejercicio de Utilidades</h2>
            <p>Aplica margen, padding, color de texto y fondo a este elemento.</p>
            <textarea
                className="form-control mb-3"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Escribe tu código aquí..."
            />
            <div className={code}>
                Este es un elemento de prueba
            </div>
        </div>
    );
};

const ButtonExercise = () => {
    const [code, setCode] = useState('');

    return (
        <div>
            <h2>Ejercicio de Botones</h2>
            <p>Crea un botón primario grande.</p>
            <textarea
                className="form-control mb-3"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Escribe tu código aquí..."
            />
            <button className={code}>Botón de prueba</button>
        </div>
    );
};

const AlertExercise = () => {
    const [code, setCode] = useState('');

    return (
        <div>
            <h2>Ejercicio de Alertas</h2>
            <p>Crea una alerta de éxito con un enlace.</p>
            <textarea
                className="form-control mb-3"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Escribe tu código aquí..."
            />
            <div className={code} role="alert">
                Esta es una alerta de prueba <a href="#" className="alert-link">con un enlace</a>.
            </div>
        </div>
    );
};

const CardExercise = () => {
    const [code, setCode] = useState('');

    return (
        <div>
            <h2>Ejercicio de Tarjetas</h2>
            <p>Crea una tarjeta con título, texto y un botón.</p>
            <textarea
                className="form-control mb-3"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Escribe tu código aquí..."
            />
            <div className={code}>
                <div className="card-body">
                    <h5 className="card-title">Título de la tarjeta</h5>
                    <p className="card-text">Contenido de la tarjeta</p>
                    <a href="#" className="btn btn-primary">Botón</a>
                </div>
            </div>
        </div>
    );
};

const NavbarExercise = () => {
    const [code, setCode] = useState('');

    return (
        <div>
            <h2>Ejercicio de Barra de Navegación</h2>
            <p>Crea una barra de navegación con un enlace activo y dos enlaces normales.</p>
            <textarea
                className="form-control mb-3"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Escribe tu código aquí..."
            />
            <nav className={code}>
                <a className="nav-link active" href="#">Activo</a>
                <a className="nav-link" href="#">Enlace</a>
                <a className="nav-link" href="#">Otro enlace</a>
            </nav>
        </div>
    );
};

const FormExercise = () => {
    const [code, setCode] = useState('');

    return (
        <div>
            <h2>Ejercicio de Formularios</h2>
            <p>Crea un formulario con un campo de email y un botón de envío.</p>
            <textarea
                className="form-control mb-3"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Escribe tu código aquí..."
            />
            <form className={code}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

const TableExercise = () => {
    const [code, setCode] = useState('');

    return (
        <div>
            <h2>Ejercicio de Tablas</h2>
            <p>Crea una tabla con bordes y filas alternas resaltadas.</p>
            <textarea
                className="form-control mb-3"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Escribe tu código aquí..."
            />
            <table className={code}>
                <thead>
                <tr>
                    <th>Encabezado 1</th>
                    <th>Encabezado 2</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Dato 1</td>
                    <td>Dato 2</td>
                </tr>
                <tr>
                    <td>Dato 3</td>
                    <td>Dato 4</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

const ModalExercise = () => {
    const [code, setCode] = useState('');

    return (
        <div>
            <h2>Ejercicio de Modales</h2>
            <p>Crea un botón que abra un modal.</p>
            <textarea
                className="form-control mb-3"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Escribe tu código aquí..."
            />
            <button type="button" className={code} data-bs-toggle="modal" data-bs-target="#exampleModal">
                Abrir modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal de prueba</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Contenido del modal
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CarouselExercise = () => {
    const [code, setCode] = useState('');

    return (
        <div>
            <h2>Ejercicio de Carrusel</h2>
            <p>Crea un carrusel con tres elementos.</p>
            <textarea
                className="form-control mb-3"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Escribe tu código aquí..."
            />
            <div id="carouselExample" className={`carousel slide ${code}`}>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-block w-100 bg-primary text-white text-center p-5">Elemento 1</div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-block w-100 bg-secondary text-white text-center p-5">Elemento 2</div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-block w-100 bg-success text-white text-center p-5">Elemento 3</div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

const BadgeExercise = () => {
    const [code, setCode] = useState('');

    return (
        <div>
            <h2>Ejercicio de Insignias</h2>
            <p>Crea una insignia de notificación.</p>
            <textarea
                className="form-control mb-3"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Escribe tu código aquí..."
            />
            <button type="button" className="btn btn-primary">
                Notificaciones <span className={code}>4</span>
            </button>
        </div>
    );
};

const ListGroupExercise = () => {
    const [code, setCode] = useState('');

    return (
        <div>
            <h2>Ejercicio de Grupos de Lista</h2>
            <p>Crea un grupo de lista con tres elementos, uno de ellos activo.</p>
            <textarea
                className="form-control mb-3"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Escribe tu código aquí..."
            />
            <ul className={code}>
                <li className="list-group-item">Elemento 1</li>
                <li className="list-group-item">Elemento 2</li>
                <li className="list-group-item">Elemento 3</li>
            </ul>
        </div>
    );
};

const PaginationExercise = () => {
    const [code, setCode] = useState('');

    return (
        <div>
            <h2>Ejercicio de Paginación</h2>
            <p>Crea una paginación con tres páginas, la segunda activa.</p>
            <textarea
                className="form-control mb-3"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Escribe tu código aquí..."
            />
            <nav>
                <ul className={code}>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                </ul>
            </nav>
        </div>
    );
};

const TooltipExercise = () => {
    const [code, setCode] = useState('');

    return (
        <div>
            <h2>Ejercicio de Tooltips</h2>
            <p>Crea un botón con un tooltip.</p>
            <textarea
                className="form-control mb-3"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Escribe tu código aquí..."
            />
            <button
                type="button"
                className="btn btn-secondary"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Tooltip de ejemplo"
                {...code}
            >
                Botón con Tooltip
            </button>
        </div>
    );
};

// Componente principal actualizado
const BootstrapTester = () => {
    const [currentExercise, setCurrentExercise] = useState(0);

    const exercises = [
        { component: GridExercise, title: "Sistema de Grid" },
        { component: FlexboxExercise, title: "Flexbox" },
        { component: UtilitiesExercise, title: "Utilidades" },
        { component: ButtonExercise, title: "Botones" },
        { component: AlertExercise, title: "Alertas" },
        { component: CardExercise, title: "Tarjetas" },
        { component: NavbarExercise, title: "Barra de Navegación" },
        { component: FormExercise, title: "Formularios" },
        { component: TableExercise, title: "Tablas" },
        { component: ModalExercise, title: "Modales" },
        { component: CarouselExercise, title: "Carrusel" },
        { component: BadgeExercise, title: "Insignias" },
        { component: ListGroupExercise, title: "Grupos de Lista" },
        { component: PaginationExercise, title: "Paginación" },
        { component: TooltipExercise, title: "Tooltips" },
    ];

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Bootstrap Tester</h1>
            <div className="mb-3">
                <label htmlFor="exerciseSelect" className="form-label">Selecciona un ejercicio:</label>
                <select
                    id="exerciseSelect"
                    className="form-select"
                    value={currentExercise}
                    onChange={(e) => setCurrentExercise(Number(e.target.value))}
                >
                    {exercises.map((exercise, index) => (
                        <option key={index} value={index}>{exercise.title}</option>
                    ))}
                </select>
            </div>
            <div className="mt-4">
                {React.createElement(exercises[currentExercise].component)}
            </div>
        </div>
    );
};

export default BootstrapTester;
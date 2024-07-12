import React from 'react';
import LazyImage from './LazyImage';

function App() {
    return (
        <div>
            <h1>Imágenes Responsivas con Lazy Loading</h1>
            <LazyImage
                src="https://upload.wikimedia.org/wikipedia/commons/f/f4/360-degree_Panorama_of_the_Southern_Sky.jpg"
                alt="Imagen de ejemplo"
                lowResSrc="/img/1000x600.png"
            />
            {/* Más contenido para hacer scroll */}
            {Array(20).fill().map((_, i) => (
                <p key={i}>Párrafo de relleno {i + 1}</p>
            ))}
            <LazyImage
                src="https://upload.wikimedia.org/wikipedia/commons/3/38/Chicago_sunrise_3.jpg"
                alt="Otra imagen de ejemplo"
                lowResSrc="/img/1000x600.png"
            />
        </div>
    );
}

export default App;
import React from 'react';
import useMediaQuery from './useMediaQuery';

function App() {
    // Utiliza el hook personalizado para detectar el tamaño de la pantalla
    const isMobile = useMediaQuery('(max-width: 767px)');
    const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
    const isDesktop = useMediaQuery('(min-width: 1024px)');

    return (
        <div>
            <h1>Ejemplo de Media Queries en React</h1>
            {isMobile && <p>Vista móvil</p>}
            {isTablet && <p>Vista tablet</p>}
            {isDesktop && <p>Vista desktop</p>}
        </div>
    );
}

export default App;
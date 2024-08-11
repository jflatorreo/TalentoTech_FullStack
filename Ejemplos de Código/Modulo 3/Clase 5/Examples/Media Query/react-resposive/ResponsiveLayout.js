import React from 'react';
import { useMediaQuery } from 'react-responsive';

function ResponsiveLayout () {
    const isDesktop = useMediaQuery({
        query: '(min-width: 1224px)'
    });
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 1224px)'});

    return (
        <div>
            {isDesktop && (
                <div>
                    <h1>Vista de Escritorio</h1>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div style={{width: '70%'}}>
                            <h2>Contenido Principal</h2>
                            <p>Este es el contenido principal de la página, que ocupa más espacio en pantallas
                                grandes.</p>
                        </div>
                        <div style={{width: '25%'}}>
                            <h2>Barra Lateral</h2>
                            <p>Información adicional o navegación secundaria.</p>
                        </div>
                    </div>
                </div>
            )}
            {isTabletOrMobile && (
                <div>
                    <h1>Vista Móvil</h1>
                    <div>
                        <h2>Contenido Principal</h2>
                        <p>Contenido adaptado para dispositivos móviles, con un diseño más vertical.</p>
                    </div>
                    <div>
                        <h2>Información Adicional</h2>
                        <p>Contenido que en escritorio estaría en la barra lateral, ahora aparece debajo.</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ResponsiveLayout;
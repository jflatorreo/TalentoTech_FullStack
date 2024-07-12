import React, { useState, useRef, useEffect } from 'react';

function LazyImage({ src, alt, lowResSrc }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const imgRef = useRef();

    useEffect(() => {
        // Crea un nuevo IntersectionObserver
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Si la imagen es visible
                if (entry.isIntersecting) {
                    // Cambia la fuente a la imagen de alta resolución
                    setIsLoaded(true);
                    // Desconecta el observer
                    observer.disconnect();
                }
            },
            { rootMargin: '100px' } // Empieza a cargar cuando la imagen está a 100px de ser visible
        );

        // Observa la imagen
        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        // Limpieza: desconecta el observer cuando el componente se desmonta
        return () => observer.disconnect();
    }, []);

    return (
        <img
            ref={imgRef}
            src={isLoaded ? src : lowResSrc}
            alt={alt}
            style={{ width: '100%', height: 'auto', transition: 'opacity 0.3s' }}
        />
    );
}

export default LazyImage;
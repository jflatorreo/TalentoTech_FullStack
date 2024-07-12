import { useState, useEffect } from 'react';

function useMediaQuery(query) {
    // Estado para almacenar si la media query coincide
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        // Crea un objeto MediaQueryList
        const media = window.matchMedia(query);

        // Actualiza el estado si la query coincide inicialmente
        if (media.matches !== matches) {
            setMatches(media.matches);
        }

        // Callback para cuando cambia el estado de la media query
        const listener = () => setMatches(media.matches);

        // Añade el listener
        media.addListener(listener);

        // Limpieza: remueve el listener cuando el componente se desmonta
        return () => media.removeListener(listener);
    }, [matches, query]);

    return matches;
}

export default useMediaQuery;
import React, { useState, useEffect } from 'react';

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return width;
}

function CustomHookExample() {
    const width = useWindowWidth();

    return (
        <div>
            <p>Window width is: {width}px</p>
        </div>
    );
}

export default CustomHookExample;
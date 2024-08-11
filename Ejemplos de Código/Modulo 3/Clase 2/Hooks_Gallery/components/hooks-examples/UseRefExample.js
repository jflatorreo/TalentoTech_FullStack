import React, { useRef, useEffect } from 'react';

function UseRefExample() {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="I'm focused!" />
        </div>
    );
}

export default UseRefExample;
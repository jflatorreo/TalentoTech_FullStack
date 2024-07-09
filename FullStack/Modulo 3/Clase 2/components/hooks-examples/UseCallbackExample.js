import React, { useState, useCallback } from 'react';

const List = React.memo(({ getItems }) => {
    console.log('List render');
    return (
        <ul>
            {getItems().map(item => <li key={item}>{item}</li>)}
        </ul>
    );
});

function UseCallbackExample() {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    const getItems = useCallback(() => {
        return [number, number + 1, number + 2];
    }, [number]);

    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333'
    };

    return (
        <div style={theme}>
            <input
                type="number"
                value={number}
                onChange={e => setNumber(parseInt(e.target.value))}
            />
            <button onClick={() => setDark(prevDark => !prevDark)}>
                Toggle theme
            </button>
            <List getItems={getItems} />
        </div>
    );
}

export default UseCallbackExample;
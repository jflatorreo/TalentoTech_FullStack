import React, { useState, useMemo } from 'react';

function UseMemoExample() {
    const [count, setCount] = useState(0);
    const [wordIndex, setWordIndex] = useState(0);
    const words = ['hey', 'this', 'is', 'cool'];
    const word = words[wordIndex];

    const computeLetterCount = (word) => {
        let i = 0;
        while (i < 1000000000) i++;
        return word.length;
    };

    const letterCount = useMemo(() => computeLetterCount(word), [word]);

    return (
        <div>
            <h3>Compute number of letters (slow 🐌)</h3>
            <p>"{word}" has {letterCount} letters</p>
            <button onClick={() => {
                const next = wordIndex + 1 === words.length ? 0 : wordIndex + 1;
                setWordIndex(next);
            }}>
                Next word
            </button>
            <h3>Increment a counter (fast ⚡️)</h3>
            <p>Counter: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default UseMemoExample;
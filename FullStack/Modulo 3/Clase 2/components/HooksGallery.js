import React, { useState } from 'react';
import UseStateExample from './hooks-examples/UseStateExample';
import UseEffectExample from './hooks-examples/UseEffectExample';
import UseContextExample from './hooks-examples/UseContextExample';
import UseRefExample from './hooks-examples/UseRefExample';
import CustomHookExample from './hooks-examples/CustomHookExample';
import UseReducerExample from './hooks-examples/UseReducerExample';
import UseMemoExample from './hooks-examples/UseMemoExample';
import UseCallbackExample from './hooks-examples/UseCallbackExample';

const examples = [
    { name: 'useState', component: UseStateExample },
    { name: 'useEffect', component: UseEffectExample },
    { name: 'useContext', component: UseContextExample },
    { name: 'useRef', component: UseRefExample },
    { name: 'Custom Hook', component: CustomHookExample },
    { name: 'useReducer', component: UseReducerExample },
    { name: 'useMemo', component: UseMemoExample },
    { name: 'useCallback', component: UseCallbackExample },
];

function HooksGallery() {
    const [selectedExample, setSelectedExample] = useState(5);

    return (
        <div className="hooks-gallery">
            <h1>React Hooks Examples</h1>
            <div className="example-list">
                {examples.map((example, index) => (
                    <button key={index} onClick={() => setSelectedExample(index)}>
                        {example.name}
                    </button>
                ))}
            </div>
            <div className="example-display">
                {selectedExample !== null && (
                    <div>
                        <h2>{examples[selectedExample].name} Example</h2>
                        {React.createElement(examples[selectedExample].component)}
                    </div>
                )}
            </div>
        </div>
    );
}

export default HooksGallery;
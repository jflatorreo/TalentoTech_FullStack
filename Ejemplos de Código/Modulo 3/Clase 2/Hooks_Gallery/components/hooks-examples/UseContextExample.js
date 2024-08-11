import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

function ThemedButton() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            style={{
                background: theme === 'light' ? '#fff' : '#000',
                color: theme === 'light' ? '#000' : '#fff',
            }}
        >
            Toggle Theme
        </button>
    );
}

function UseContextExample() {
    return (
        <ThemeProvider>
            <div>
                <h2>Current Theme: <ThemedButton /></h2>
            </div>
        </ThemeProvider>
    );
}

export default UseContextExample;
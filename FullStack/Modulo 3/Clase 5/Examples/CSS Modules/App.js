import React from 'react';
import './App.module.css'; // Importación de CSS tradicional
import styles from './App.module.css'; // Importación de CSS Modules
import styled from 'styled-components'; // Importación de styled-components

// Componente con CSS tradicional
function TraditionalCSS() {
    return <div className="traditional">CSS Tradicional</div>;
}

// Componente con CSS Modules
function ModularCSS() {
    return <div className={styles.modular}>CSS Modular</div>;
}

// Componente con styled-components
const StyledComponent = styled.div`
  background-color: #61dafb;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
`;

function App() {
    return (
        <div className="App">
            <h1>Ejemplos de CSS en React</h1>
            <TraditionalCSS />
            <ModularCSS />
            <StyledComponent>Styled Component</StyledComponent>
        </div>
    );
}

export default App;
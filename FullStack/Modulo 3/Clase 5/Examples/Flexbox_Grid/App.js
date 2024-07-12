import React from 'react';
import styled from 'styled-components';

// Contenedor Flex
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

// Elemento Flex
const FlexItem = styled.div`
  flex-basis: 100%;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #f0f0f0;
  
  @media (min-width: 600px) {
    flex-basis: calc(50% - 0.5rem);
  }
  
  @media (min-width: 1024px) {
    flex-basis: calc(33.333% - 0.667rem);
  }
`;

// Contenedor Grid
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

// Elemento Grid
const GridItem = styled.div`
  background-color: #e0e0e0;
  padding: 1rem;
`;

function App() {
    return (
        <div>
            <h1>Flexbox y Grid en React</h1>

            <h2>Flexbox Layout</h2>
            <FlexContainer>
                <FlexItem>Flex Item 1</FlexItem>
                <FlexItem>Flex Item 2</FlexItem>
                <FlexItem>Flex Item 3</FlexItem>
            </FlexContainer>

            <h2>Grid Layout</h2>
            <GridContainer>
                <GridItem>Grid Item 1</GridItem>
                <GridItem>Grid Item 2</GridItem>
                <GridItem>Grid Item 3</GridItem>
            </GridContainer>
        </div>
    );
}

export default App;
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    width: 200px;
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;

  @media (min-width: 992px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #666;

  @media (min-width: 992px) {
    font-size: 1.1rem;
  }
`;

const Button = styled.button`
  background-color: #0077b6;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #023e8a;
  }

  @media (min-width: 768px) {
    align-self: flex-start;
  }
`;

function ResponsiveCard({ image, title, description }) {
    return (
        <Card>
            <Image src={image} alt={title} />
            <Content>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <Button>Ver más</Button>
            </Content>
        </Card>
    );
}

export default ResponsiveCard;
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    // ToDo: Definir el fondo de color blanco
    // ToDo: Añadir un border-radius de 8px
    // ToDo: Agregar una sombra suave
    // ToDo: Establecer un padding interno
    // ToDo: Definir un margen externo
    // ToDo: Añadir una transición suave para todos los cambios

    @media (min-width: 768px) {
        // ToDo: Cambiar a display flex
        // ToDo: Alinear los items al centro
    }
`;

const CheckBox = styled.input.attrs({ type: 'checkbox' })`
    // ToDo: Definir el ancho y alto del checkbox
    // ToDo: Añadir un margen a la derecha
    // ToDo: Cambiar el cursor a pointer

    @media (min-width: 768px) {
        // ToDo: Aumentar ligeramente el tamaño para pantallas más grandes
    }
`;

const Content = styled.div`
    // ToDo: Hacer que ocupe todo el espacio disponible
`;

const Title = styled.h3`
    // ToDo: Definir el tamaño de fuente
    // ToDo: Añadir un margen inferior
    // ToDo: Aplicar un estilo condicional para tareas completadas (text-decoration)
    // ToDo: Cambiar el color basado en si está completada o no

    @media (min-width: 992px) {
        // ToDo: Aumentar el tamaño de fuente para pantallas más grandes
    }
`;

const Description = styled.p`
    // ToDo: Definir el tamaño de fuente
    // ToDo: Establecer la altura de línea
    // ToDo: Definir el color del texto
    // ToDo: Aplicar un estilo condicional para tareas completadas (text-decoration)

    @media (min-width: 992px) {
        // ToDo: Aumentar ligeramente el tamaño de fuente para pantallas más grandes
    }
`;

const Button = styled.button`
    // ToDo: Definir el color de fondo (condicional para botón de eliminar)
    // ToDo: Establecer el color del texto
    // ToDo: Eliminar el borde
    // ToDo: Añadir padding
    // ToDo: Definir el border-radius
    // ToDo: Cambiar el cursor a pointer
    // ToDo: Añadir una transición suave para el color de fondo
    // ToDo: Establecer un margen a la izquierda

    &:hover {
        // ToDo: Cambiar el color de fondo al pasar el mouse (condicional para botón de eliminar)
    }

    @media (min-width: 768px) {
        // ToDo: Alinear el botón al centro verticalmente
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
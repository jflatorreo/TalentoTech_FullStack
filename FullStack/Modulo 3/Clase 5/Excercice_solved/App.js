import ResponsiveCard from "./ResponsiveCard";
function App() {
    return (
        <div>
            <ResponsiveCard
                image="https://example.com/image.jpg"
                title="Título de la Tarjeta"
                description="Esta es una descripción de ejemplo para la tarjeta. El contenido se ajustará responsivamente según el tamaño de la pantalla."
            />
        </div>
    );
}
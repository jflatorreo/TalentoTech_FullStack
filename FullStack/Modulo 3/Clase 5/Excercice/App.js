import ResponsiveCard from "./ResponsiveCard";
function App() {
    return (
        <div>
            <ResponsiveCard
                image="https://upload.wikimedia.org/wikipedia/commons/f/f4/360-degree_Panorama_of_the_Southern_Sky.jpg"
                title="Título de la Tarjeta"
                description="Esta es una descripción de ejemplo para la tarjeta. El contenido se ajustará responsivamente según el tamaño de la pantalla."
            />
        </div>
    );
}
import React from "react";
import AgroCard from './components/AgroCard';

function App() {
    return (

        <div className="container mx-auto p-4 bg-sky-light min-h-screen">
            <h1 className="text-4xl text-soil-dark mb-4">Sistema Agroecológico</h1>
            <div className="grid grid-cols-2 gap-4">
                <AgroCard
                    title="Compostaje"
                    content="El compostaje es fundamental para el reciclaje de nutrientes."
                    icon="compost"
                    pattern="soil-texture"
                />
                <AgroCard
                    title="Biodiversidad"
                    content="La diversidad de especies es clave para un ecosistema saludable."
                    icon="biodiversity"
                    pattern="sky-texture"
                />
                <AgroCard
                    title="Rotación de Cultivos"
                    content="La rotación ayuda a mantener la salud del suelo."
                    icon="crop_rotation"
                    pattern="water-texture"
                />
            </div>
        </div>
    );
}

export default App;
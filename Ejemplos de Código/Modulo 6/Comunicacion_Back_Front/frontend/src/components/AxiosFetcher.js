import React, {useState, useCallback} from 'react';

import axios from 'axios';

function AxiosFetcher(){

        const [inputData,setInputData] = useState('')

        const [error, setError] = useState(null)

    const [response, setResponse] = useState(null)


    const handleSubmit = useCallback(() => {
            axios.post('https://faf2-186-148-166-110.ngrok-free.app/api/submit', {data : inputData}).then(res => {
                console.log(res.status)
                if (!res.status === 200) {
                    throw new Error('Error en la respuesta del servidor');
                }
                setResponse(res.data)

            }).catch((err) => {
                console.log(err)
                setError(err.message)
            });
        }, [inputData]);

        if (error) return <div>Error: {error}</div>;

        return (
            <div>
                <h1>Formulario Axios</h1>
                <input
                    type={"text"}
                    value={inputData}
                    onChange={(e)=>setInputData(e.target.value)}
                    />
                <button onClick={handleSubmit}>Enviar</button>
                {response && <p>Respuesta del servidor: {response.data}</p>}
            </div>
        )
    }
    export default AxiosFetcher;
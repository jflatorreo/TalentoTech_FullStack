import React, {useState, useEffect} from 'react';


function DataFetcher() {

const [data,setData] = useState(1234)

const [error, setError] = useState(null)


    useEffect(() => {
        fetch('https://92b7-186-148-166-110.ngrok-free.app/api/data', {
            mode: 'no-cors',
            method: "GET",
            headers: {
                "ngrok-skip-browser-warning": "69420"
            }
        }).then(res => {
            console.log(res.status)
            if (!res.status === 200) {
                throw new Error('Error en la respuesta del servidor');
            }
            return res.json();

        }).then(data => {
            console.log(data);
            setData(data)
        }).catch((err) => {
           // console.log(err)
            //setError(err)
        });
    }, []);

    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Datos Recibidos</h1>
            <p>{data}</p>
        </div>
    )
}

export default DataFetcher;
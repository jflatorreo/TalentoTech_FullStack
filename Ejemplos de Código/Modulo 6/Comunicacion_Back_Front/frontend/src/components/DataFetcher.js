import React, {useState, useEffect} from 'react';


function DataFetcher() {

const [data,setData] = useState(null)

const [error, setError] = useState(null)


    useEffect(() => {
        fetch('https://faf2-186-148-166-110.ngrok-free.app/api/data', {
            method: "get",
            headers: new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json', 'X-Requested-With': 'XMLHttpRequest' ,"ngrok-skip-browser-warning": "69420"}),
        }).then(res => {
            console.log(res)
            if (!res.ok) {
                throw new Error('Error en la respuesta del servidor');
            }
            return res.json();

        }).then(data => {
            console.log(data);
            setData(data)
        }).catch((err) => {
            console.log(err)
            setError(err)
        });
    }, []);

    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Datos Recibidos</h1>
            <p>{data?.message}</p>
        </div>
    )
}

export default DataFetcher;
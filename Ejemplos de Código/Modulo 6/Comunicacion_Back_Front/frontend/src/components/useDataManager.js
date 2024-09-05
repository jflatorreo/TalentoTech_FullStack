import {useState,useEffect,useCallback} from "react";

import axios from "axios";

function useDataManager(ngrokUrl) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [inputData, setInputData] = useState(null);

    useEffect(() => {
        fetch(`${ngrokUrl}/api/users`, {
            method: "get",
            headers: new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json', 'X-Requested-With': 'XMLHttpRequest' ,"ngrok-skip-browser-warning": "123456"}),
        }).then(res => {
            console.log(res)
            if (!res.ok) {
                throw new Error('Error en la respuesta del servidor');
            }
            return res.json();

        }).then(data => {
            console.log(data);
            setData(data)
            setLoading(false)
        }).catch((err) => {
            console.log(err)
            setError(err)
            setLoading(false)
        });
    }, [ngrokUrl]);

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    }

    const handleSubmit = useCallback( ()=> {
        axios.post(`${ngrokUrl}/api/users`,{data:inputData})
            .then()
            .catch((err) => {})
        }

    ,[inputData, ngrokUrl])



    return {
        data,
        loading,
        error,
        handleSubmit
    }

}

export default useDataManager;
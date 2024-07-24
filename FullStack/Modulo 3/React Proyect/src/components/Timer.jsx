import React,{useContext,useEffect,useState} from 'react';
import {ColorContext} from "../ColorContext";

function Timer(){
    const [seconds,setSeconds] = useState(0);
    const {theme,toggleTheme}=useContext(ColorContext);

    useEffect(() => {

        const interval = setInterval(() =>{
                setSeconds(prevSeconds =>prevSeconds+1);
            },1000);

        return () => clearInterval(interval);

    }, []);

    return (
        <div className={`timer ${theme}`} >
            <h1>Temporizador: {seconds} segundos</h1>
            <button onClick={toggleTheme}>Cambiar Tema</button>
        </div>
    )

}

export default Timer;
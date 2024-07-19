import React,{useContext,useState} from "react";
import {ColorContext} from "../App";
function Counter(){
    const {theme} = useContext(ColorContext);
    const [count,setCount] = useState(0);

    return(
        <div className={`counter ${theme}`}>
            <h2>Contador: {count}</h2>
            <button onClick={() => setCount(actualCount => actualCount + 1)}>Incrementar</button>
            <button onClick={() => setCount(actualCount => actualCount - 1)}>Decrementar</button>

        </div>
    )


}

export default Counter
import React,{useState,useContext,useEffect} from "react";
import Counter from "./components/Counter";
import Boton from "./components/Boton";
import {ColorContext} from "./ColorContext";


function App(){
    const [theme,setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(actualTheme =>actualTheme === 'light'?'dark':'light')
    };

    return (
        <ColorContext.Provider value={{theme, toggleTheme}}>
            <div className={`App ${theme}`}>
                <h1>App con Hooks</h1>
                <Counter></Counter>
                <Boton></Boton>
            </div>
        </ColorContext.Provider>
    );
}
export default App;
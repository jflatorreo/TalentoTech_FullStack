import React, {useContext} from 'react'
import {ColorContext} from "../ColorContext";


function Boton (){

    const {theme, toggleTheme}= useContext(ColorContext);

    return(
        <div className={`boton ${theme}`}>
            <button onClick={toggleTheme}>Cambiar Tema</button>
        </div>
    )
}
export default Boton;
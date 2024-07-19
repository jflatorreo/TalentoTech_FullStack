import React from 'react'

import {ColorContext} from "../App";

const theme = ColorContext

function Boton (props){
    return(
        <div className={''}>
            <button onClick={props.toggleFunction}>Cambiar Tema</button>
        </div>
    )
}
export default Boton;
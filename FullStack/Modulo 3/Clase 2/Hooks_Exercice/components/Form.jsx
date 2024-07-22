import React, {useContext, useEffect, useState} from "react";
import {ColorContext} from "../ColorContext";

function Form(props){

const [name, setName] = useState('');
const [email, setEmail] = useState('');

const [isValid, setIsValid] = useState(false);

const {theme} = useContext(ColorContext);

    useEffect(() => {
        setIsValid(name.length > 4 && email.includes('@'));
    }, [name,email]);

    const handlerSubmit = (e) =>{
        e.preventDefault();
        if (isValid){
            //Logica del envio del Formulario
            alert ("Formulario enviado"+{name,email});
        }else {
            alert ("Formulario NO enviado"+{name,email});
        }
    }
    return(<div>
        <h1>{props.title}</h1>
        <form onSubmit={handlerSubmit}>
            <input value={name}
                   onChange={(e)=>setName(e.target.value)}/>
            <input value={email}
                   onChange={(e) => setEmail(e.target.value)}/>
            <button type={"submit"} className={isValid?'ValidButton':'InvalidButton'}>
                Enviar
            </button>
        </form>
    </div>)
}

export default Form;
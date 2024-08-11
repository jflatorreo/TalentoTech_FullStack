import React, {useContext, useEffect, useState} from "react";
import {ColorContext} from "../ColorContext";

function Form(props){

const [formData, setFormData] = useState({
    name : '',
    email:''
});

const [isValid, setIsValid] = useState(false);

const [errors, setErrors] = useState({});

const {theme} = useContext(ColorContext);

    useEffect(() => {
        validate();

    }, [formData]);

    function validate(){

        let newError = {

        };


        const regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!regExp.test(formData.email)){
            newError.email = "Email invalido"
            setIsValid(false);
        }

        if (formData.name.length < 4){
            newError.name = "Nombre invalido debe tener por lo menos 5 caracteres"
            setIsValid(false);
        }

        setErrors(newError);

    }

    const handlerSubmit = (e) =>{
        e.preventDefault();
        if (isValid){
            //Logica del envio del Formulario
            alert ("Formulario enviado"+{formData});
        }else {
            alert ("Formulario NO enviado"+{formData});
        }
    }

    const handlerChange = (e)=>{
        const {name, value} = e.target;
        setFormData(prevData =>(
            {...prevData,
            [name]:value}
        ))
    }

    return(<div>
        <h1>{props.title}</h1>
        <form onSubmit={handlerSubmit}>
            <input name='name'
                   value={formData.name}
                   onChange={handlerChange}/>
            {errors.name && <span className={'formError'}>{errors.name}</span> }

            <input name={'email'}
                    value={formData.email}
                   onChange={handlerChange}
                    />
            {errors.email && <span className={'formError'}>{errors.email}</span> }
            <button type={"submit"} className={isValid?'ValidButton':'InvalidButton'}>
                Enviar
            </button>
        </form>
    </div>)
}

export default Form;
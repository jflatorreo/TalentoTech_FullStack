function Parent(){
    const [state,setState] = useState(0);

    const handler=()=>{
        setState(prevCount => prevCount +1);
    }

    

    return(
        <div>
            <p>{state}</p>
            <child handler={handler}></child>
        </div>
    )
}

function chlid(props){
    return(
        <button onClick={props.handler}></button>
    )
}
function InputField({ label, name, type, value, onChange, error }) {
    //handlers...según type={type}
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
            />
            {error && <span className="error">{error}</span>}
        </div>
    );
}

import InputField

function Form {

    return (
        <inputField type="text" id="" name=value="" onChange={}></inputField>
    <inputField type="text" id="" name=value="" onChange={}></inputField>
    <inputField type="password" id="" name= value="" onChange={}></inputField>
    <inputField type="text" id="" name=value="" onChange={}></inputField>
    <inputField type="text" id="" name=value="" onChange={}></inputField>

}


)
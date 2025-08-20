const InputField = (props) => {

    return (
        <>
            <label htmlFor={props.name} className='form-label'> {props.label} </label>
            <input type={props.type} name={props.name} id={props.name} className='form-control' />
        </>
    )
}

export default InputField;
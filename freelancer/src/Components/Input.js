const Input = (props) => {
    return <div className="w-4/5">
        <input className="w-full p-2 mb-2 rounded-md border" minLength="8 required" type={props.type} id={props.id} placeholder={props.placeholder} />
    </div>
}

export default Input
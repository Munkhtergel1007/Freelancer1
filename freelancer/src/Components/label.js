const Label = (props) => {
    return <div className="mb-1">
        <label htmlFor={props.htmlFor}>{props.text}</label>
    </div>
}

export default Label
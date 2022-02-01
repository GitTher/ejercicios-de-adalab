const Form = (props) => {

    const handleGetValue = (event) => {
        props.handleInput(event.currentTarget.value);
    }

    return (
        <label htmlFor="search">Introduce el nombre de la serie:
            <input type="text" id="search" name="search" value={props.searchValue} onChange={handleGetValue} />
        </label>
    )
}

export default Form
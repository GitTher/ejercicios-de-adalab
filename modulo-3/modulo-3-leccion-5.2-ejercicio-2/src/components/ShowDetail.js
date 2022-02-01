const ShowDetail = (props) => {
    return (
        <>
            <h2>{props.data.name}</h2>
            <p>Puntuación: {props.data.score}</p>
            <p>Generos: {props.data.genres}</p>
        </>
    )
}

export default ShowDetail
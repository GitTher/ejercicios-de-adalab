import ShowDetail from "./ShowDetail"

const List = (props) => {
    const showElements = props.data.map((show) => {
        return (
            <li key={show.id}>
                <ShowDetail data={show} />
            </li>
        )
    });
    return (
        <ul>
            {showElements}
        </ul>
    )
}

export default List
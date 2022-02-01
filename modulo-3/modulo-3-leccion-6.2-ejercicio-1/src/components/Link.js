const Link = (props) => {
    return (
        <li className="nav--item">
            <a title={props.title} href={props.url}>{props.text}</a>
        </li>
    )
}

export default Link
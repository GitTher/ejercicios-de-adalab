const Link = (props) => {
    return (
        <li className="nav--item">
            <a title={props.title} href={props.url} rel="noopener noreferrer" target={props.openInNewTab ? '_blank' : ''}>{props.text}</a>
        </li>
    )
}

export default Link
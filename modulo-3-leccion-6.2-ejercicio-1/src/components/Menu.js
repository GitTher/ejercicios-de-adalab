import Link from './Link'

const Menu = () => {
    return (
        <nav>
            <ul className="nav">
                <Link title="blog" url="/" text="Blog" />
                <Link title="contacto" url="/" text="Contacto" />
            </ul>
        </nav>
    );
}

export default Menu
import logo from '../images/adalab-logo-155x61.png';

const Logo = () => {
    return (
        <a href="https://adalab.es">
            <img
                className="logo"
                src={logo}
                alt="logo de adalab"
                title="logo-de-adalab"
            />
        </a>
    );
}

export default Logo
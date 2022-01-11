
import '../styles/App.scss';
import logo from '../images/adalab-logo-155x61.png';

function App() {
  return (

    <div>
      <header className="header">
        <a href="https://adalab.es">
          <img
            className="logo"
            src={logo}
            alt="logo de adalab"
            title="logo-de-adalab"
          />
        </a>
        <nav>
          <ul className="nav">
            <li className="nav--item"><a href="#">BLOG</a></li>
            <li className="nav--item"><a href="#">CONTACTO</a></li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <h1 className="title">Creando diversidad digital</h1>
      </main>
    </div>

  );
}

export default App;

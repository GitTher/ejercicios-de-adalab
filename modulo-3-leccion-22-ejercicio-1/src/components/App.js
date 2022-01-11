
import '../styles/App.scss';

function App() {
  const handleClick = (event) => {
    event.preventDefault();
    console.log('La tecla pulsada es: ', event.key);
  };
  return (
    <div>
      <h1>Consolea la tecla pulsada</h1>
      <form><input onKeyUp={handleClick} type="text"></input></form>
    </div>
  );
}

export default App;

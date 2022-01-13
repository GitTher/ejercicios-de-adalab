import { useState } from 'react';
import '../styles/App.scss';

function App() {
  const [macarrones, setMacarrones] = useState(false);
  const [patatas, setPatatas] = useState(false);
  const [nueces, setNueces] = useState(false);
  const [huevos, setHuevos] = useState(false);
  const [cebolla, setCebolla] = useState(false);
  const [cerveza, setCerveza] = useState(false);

  const handleMacarrones = ev => {
    setMacarrones(ev.currentTarget.checked);
  }
  const handlePatatas = ev => {
    setPatatas(ev.currentTarget.checked);
  }
  const handleNueces = ev => {
    setNueces(ev.currentTarget.checked);
  }
  const handleHuevos = ev => {
    setHuevos(ev.currentTarget.checked);
  }
  const handleCebolla = ev => {
    setCebolla(ev.currentTarget.checked);
  }
  const handleCerveza = ev => {
    setCerveza(ev.currentTarget.checked);
  }

  const handleTortilla = () => {
    if (patatas === true && huevos === true && cebolla === true) {
      return "Eres una persona concebollista"
    } else {
      return "Eres un robot sin paladar"
    }
  };
  return (
    <div>
      <h1>Selecciona los ingredientes de la tortilla de patatas</h1>

      <form>
        <input type="checkbox" name="macarrones" id="macarrones" checked={macarrones} onChange={handleMacarrones}>
        </input>
        <p>Macarrones</p>
        <input type="checkbox" name="patatas" id="patatas" checked={patatas} onChange={handlePatatas}>
        </input>
        <p>Patatas</p>
        <input type="checkbox" name="nueces" id="nueces" checked={nueces} onChange={handleNueces}>
        </input>
        <p>Nueces</p>
        <input type="checkbox" name="huevos" id="huevos" checked={huevos} onChange={handleHuevos}>
        </input>
        <p>Huevos</p>
        <input type="checkbox" name="cebolla" id="cebolla" checked={cebolla} onChange={handleCebolla}>
        </input>
        <p>Cebolla</p>
        <input type="checkbox" name="cerveza" id="cerveza" checked={cerveza} onChange={handleCerveza}>
        </input>
        <p>Cerveza</p>
      </form>
      <p>{handleTortilla()}</p>
    </div>
  );
}

export default App;


/* Te habrá pasado muchas veces que cuando te registras en una página te aparece un componente para comprobar si eres una persona o un bot. Ese componente nos hace una pregunta que en teoría solo un ser humano podría responder bien. Vamos a programarlo:

Crea un nuevo ejercicio desde tu React starter kit.
Crea el HTML de la página con:

Un título que sea "Selecciona los ingredientes de la tortilla de patatas".

Y un formulario con checkboxes para des / marcar estos ingredientes:
Macarrones
Patatas
Nueces
Huevos
Cebolla
Cerveza

A continuación programa la funcionalidad que haga que si la usuaria selecciona solo los ingredientes Patatas, Huevos y Cebolla aparezca un párrafo con el texto "Eres una persona concebollista". En cualquier otro caso el texto de este párrafo debe ser "Eres un robot sin paladar".

Cada vez que tengas que hacer un ejercicio lo primero que debes pensar es:
Qué datos necesito guardar en el estado de React y cuáles no.
Qué tipo de datos son.

Pista: en este caso los datos que debemos guardar en el estado son solo los datos que la usuaria puede cambiar. */
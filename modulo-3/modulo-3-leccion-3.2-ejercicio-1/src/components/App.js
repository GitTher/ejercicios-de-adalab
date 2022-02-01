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

  const handleSelectAll = () => {
    setMacarrones(!macarrones);
    setPatatas(!patatas);
    setNueces(!nueces);
    setHuevos(!huevos);
    setCebolla(!cebolla);
    setCerveza(!cerveza);
  }
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
      <button onClick={handleSelectAll}>Des/marcar todos</button>
      <p>{handleTortilla()}</p>
    </div>
  );
}

export default App;


/* Partiendo del ejercicio de bot vs persona concebollista vamos a controlar los inputs del componente.

Edita el ejercicio "Eres un bot o una persona".

Añade un botón con el texto "Marcar todos" y otro con el texto "Desmarcar todos". Cuando la usuaria pulse en uno de estos dos botones deben pasar dos cosas:

Los checkboxes deben des / activarse.

Se debe mostrar el texto que corresponda, "Eres una persona concebollista" o "Eres un robot sin paladar".

Por supuesto, si la usuaria des / activa un solo checkbox la aplicación debe seguir funcionando bien. */
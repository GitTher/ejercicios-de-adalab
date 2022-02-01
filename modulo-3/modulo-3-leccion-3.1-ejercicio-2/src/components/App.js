
import '../styles/App.scss';
import { useState } from 'react';

function App() {

  const [userValue, setUserValue] = useState('');

  const handleUserValue = event => {
    setUserValue(event.target.value);
  };

  const handleMimimi = () => {
    return (userValue.replace(/[aeou]/gi, 'i'));
  };
  return (
    <div>
      <input type="textarea" value={userValue} onChange={handleUserValue} />
      <p>{handleMimimi()}</p>
    </div>
  );
}

export default App;

/* ¿No te ha pasado nunca que has dicho algo y se han burlado de vosotras con un MIMIMI?

"Al final de esa línea te falta un punto y coma."
"Il finil di isi linii ti filti in pinti y cimi."

Pues es hora de contraatacar y crear nuestro propio traductor MIMIMI con React. Debemos:
Crear un nuevo ejercicio.

Añadir un párrafo.

Añadir un textarea. Cuando la usuaria escriba algo en este campo de texto debemos pintar en el párrafo el mismo texto pero traducido a MIMIMI.

Pista: para realizar la traducción basta con buscar una expresión regular (RegExp) y el método replace de las cadenas. Si buscas "javascript regex replace vowels" en Google va a ser fácil de encontrar. */
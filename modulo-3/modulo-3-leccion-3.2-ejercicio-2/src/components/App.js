import { useState } from 'react';

const App = () => {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);

  const [operation, setOperation] = useState('Sumar')

  const handleNumberA = ev => {
    setNumberA(ev.target.value);
  };

  const handleNumberB = ev => {
    setNumberB(ev.target.value);
  };

  const handleOperation = ev => {
    setOperation(ev.target.value);
  }

  const total = () => {
    if (operation === 'Sumar') {
      return <p>La suma de <strong>{numberA}</strong> y <strong>{numberB}</strong> es
        <strong> {(parseInt(numberA) + parseInt(numberB))}</strong>.</p>
    } else if (operation === 'Restar') {
      return <p>La resta de <strong>{numberA}</strong> y <strong>{numberB}</strong> es
        <strong> {(parseInt(numberA) - parseInt(numberB))}</strong>.</p>
    } else if (operation === 'Multiplicar') {
      return <p>La multiplicación de <strong>{numberA}</strong> y <strong>{numberB}</strong> es
        <strong> {(parseInt(numberA) * parseInt(numberB))}</strong>.</p>
    } else if (operation === 'Dividir') {
      return <p>La división de <strong>{numberA}</strong> entre <strong>{numberB}</strong> es
        <strong> {(parseInt(numberA) / parseInt(numberB))}</strong>.</p>
    };
  };

  return (
    <div>
      <h1>La calculadora:</h1>
      <form>
        <select
          className="input-select"
          name="operation"
          id="operation"
          value={operation}
          onChange={handleOperation}
        >
          <option>Sumar</option>
          <option>Restar</option>
          <option>Multiplicar</option>
          <option>Dividir</option>
        </select>
        <label>
          Escribe un número:
          <input type="number" name="name" onChange={handleNumberA} />
        </label>
        <label>
          Escribe otro número:
          <input type="number" name="email" onChange={handleNumberB} />
        </label>
      </form>
      {total()}
    </div>
  );
};

export default App;

/* Partiendo de este código queremos mejorar su funcionalidad. Para ello:
Añade al principio del formulario un input select con las opciones: Sumar, Restar, Multiplicar y Dividir.

Cuando la usuaria elija una operación en este select debes guardar su valor en el estado de React.

También debes cambiar el retorno de esta función para que el último párrafo y el total sean coherentes con los datos de los inputs.

Añade un botón Reset que al pulsarlo:

Los inputs se pongan a 0.

El select se ponga con su primer valor que es Sumar. */

import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [contador, setContador] = useState(0);
  const handleContador = event => {
    setContador(contador + 1);
  }
  const handleReset = event => {
    setContador(0);
  }
  return (
    <div>
      <p>Contador: <span>{contador}</span></p>
      <button onClick={handleContador}>+1</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}

export default App;


import '../styles/App.scss';

import { useState } from 'react';

function App() {
  let [mode, setMode] = useState(false);

  const handleMode = ev => {
    ev.currentTarget.parentElement.classList.toggle('dark');
    setMode(value => !value);
  }

  const renderDarkModeText = () => {
    if (mode === true) {
      return 'Tienes activado el dark mode';
    } else {
      return null
    }
  }

  return (
    <div >
      <button onClick={handleMode}>Des/activar el dark mode</button>
      <p> {renderDarkModeText()}</p>
      <p>lorem ipsum dolor sit ammet</p>

    </div>
  );
}

export default App;
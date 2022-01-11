import burger from '../images/003-hamburguer.svg';
import close from '../images/003-food.svg'
import '../styles/App.scss';

import { useState } from 'react';

function App() {
  let [mode, setMode] = useState(false);
  const handleMode = ev => {
    const container = document.querySelector('.container');
    container.classList.toggle('close');
    setMode(value => !value);
  }

  return (
    <div>
      <img onClick={handleMode} className="icon" src={burger} alt="burger menu" />
      <section className="container close">
        <img onClick={handleMode} className="icon" src={close} alt="close menu" />
      </section>
    </div>
  );
}

export default App;

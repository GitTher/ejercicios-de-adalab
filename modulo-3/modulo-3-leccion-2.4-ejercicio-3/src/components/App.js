import burger from '../images/003-hamburguer.svg';
import close from '../images/003-food.svg'
import '../styles/App.scss';

import { useState } from 'react';

function App() {
  let [mode, setMode] = useState(false);
  const handleMode = ev => {
    setMode(!mode);
  }

  const renderModal = () => {
    if (mode === true) {
      return (<img onClick={handleMode} className="icon" src={close} alt="close menu" />)
    }
  }

  return (
    <div>
      <img onClick={handleMode} className="icon" src={burger} alt="burger menu" />
      <section>
        {renderModal()}
      </section>
    </div>
  );
}

export default App;

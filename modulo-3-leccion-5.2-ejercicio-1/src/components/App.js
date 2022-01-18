import { useEffect, useState } from 'react';
import '../styles/App.scss';
import callToApi from '../services/api'

function App() {

  const [showData, setShowData] = useState({});

  useEffect(() => {
    callToApi().then(response => {
      setShowData(response);
    });
  }, []);

  return (
    <div>
      <h1>Hola mundo</h1>
    </div>
  );
}

export default App;

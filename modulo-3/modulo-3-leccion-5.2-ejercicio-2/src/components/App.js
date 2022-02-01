import { useState } from 'react';
// import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
// import '../styles/App.scss';
// import PropTypes from 'prop-types';

import Form from "./Form";
import GetFromApi from '../services/Api';
import List from './List';

function App() {

  const [searchValue, setSearchValue] = useState('');
  const [showsData, setShowsData] = useState('');

  const handleInput = (userValue) => {
    setSearchValue(userValue);
    renderShows();
  }
  const renderShows = () => {
    GetFromApi().then((cleanData) => {
      setShowsData(cleanData);
    })

  }

  return (
    <div>
      <h1>Buscador de series</h1>
      <Form searchValue={searchValue} handleInput={handleInput} />
      <List data={showsData} />
    </div>
  );
}

export default App;

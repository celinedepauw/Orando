// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import Header from 'src/components/Header';
import Home from 'src/containers/Home';
import './styles.scss';


// == Composant
const App = ({ loadWalksFromApi }) => {
  useEffect(() => {
    loadWalksFromApi();
  }, []);

  return (
    <div className="app">
      <Header />
      <Home />
      <div>Navigation bas de page pour mobile</div>
      <footer>Footer</footer>
    </div>
  );
};

App.propTypes = {
  // fonction qui permet de charger les recettes
  // pas de paramètre
  loadWalksFromApi: PropTypes.func.isRequired,
};

// == Export
export default App;

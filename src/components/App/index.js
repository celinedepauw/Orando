// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import Header from 'src/components/Header';
import Home from 'src/containers/Home';
import MobileNav from 'src/components/MobileNav';
import Footer from 'src/components/Footer';
// Remove this import before pull request
import Account from 'src/components/Account';
import './styles.scss';


// == Composant
const App = ({ loadWalksFromApi }) => {
  useEffect(() => {
    loadWalksFromApi();
  }, []);

  return (
    <div className="app">
      <Header />
      <Account />
      <Footer />
      <MobileNav />
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

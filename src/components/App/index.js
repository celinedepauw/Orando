// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import Header from 'src/components/Header';
import Page from 'src/components/Page';
import MobileNav from 'src/components/MobileNav';
import Footer from 'src/components/Footer';


// == Composant
const App = ({ loadAreasFromApi, loadWalksFromApi, loadUserFromApi }) => {
  useEffect(() => {
    loadAreasFromApi();
    loadWalksFromApi();
    loadUserFromApi();
  }, []);

  return (
    <div className="app">
      <Header />
      <Page />
      <Footer />
      <MobileNav />
    </div>
  );
};

App.propTypes = {
  loadAreasFromApi: PropTypes.func.isRequired,
  loadWalksFromApi: PropTypes.func.isRequired,
  loadUserFromApi: PropTypes.func.isRequired,
};

// == Export
export default App;

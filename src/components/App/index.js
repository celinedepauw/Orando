// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import Header from 'src/containers/Header';
import Page from 'src/containers/Page';
import MobileNav from 'src/containers/MobileNav';
import Footer from 'src/components/Footer';
import CreateWalk from 'src/containers/CreateWalk';
import './styles.scss';

// == Composant
const App = ({
  loadAreasFromApi,
  loadWalksFromApi,
  loadTagsFromApi,
  checkUserAuth,
}) => {
  useEffect(() => {
    loadAreasFromApi();
    loadWalksFromApi();
    loadTagsFromApi();
    checkUserAuth();
  }, []);

  return (
    <div className="app">
      <Header />
      <CreateWalk />
      <Footer />
      <MobileNav />
    </div>
  );
};

App.propTypes = {
  loadAreasFromApi: PropTypes.func.isRequired,
  loadWalksFromApi: PropTypes.func.isRequired,
  loadTagsFromApi: PropTypes.func.isRequired,
  checkUserAuth: PropTypes.func.isRequired,
};

// == Export
export default App;

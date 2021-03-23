// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import Home from 'src/containers/Home';
import './styles.scss';


// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Home />
    <div>Navigation bas de page pour mobile</div>
    <footer>Footer</footer>
  </div>
);

// == Export
export default App;

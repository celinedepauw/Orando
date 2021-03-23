// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import MobileNav from 'src/components/MobileNav';
import './styles.scss';


// == Composant
const App = () => (
  <div className="app">
    <Header />
    <div>Page</div>
    <MobileNav />
    <footer>Footer</footer>
  </div>
);

// == Export
export default App;

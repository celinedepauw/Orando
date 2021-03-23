// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import MobileNav from 'src/components/MobileNav';
import Footer from 'src/components/Footer';
import './styles.scss';


// == Composant
const App = () => (
  <div className="app">
    <Header />
    <div>Page</div>
    <MobileNav />
    <Footer />
  </div>
);

// == Export
export default App;

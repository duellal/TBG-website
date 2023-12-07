import React from 'react';

import logo from './images/TBG-logo.png';
// import './styles/general.css';

//components/pages
import About from './pages/about';
import Boarding from './pages/boarding';
import Daycare from './pages/daycare';
import FAQs from './pages/FAQs';
import Footer from './pages/footer';
import Forms from './pages/forms';
import Grooming from './pages/grooming';
import Header from './pages/header';
import Home from './pages/home';

function Website() {
  return (
    <div className="App">
      <Header />
          <Home />
          <About />
          <Boarding />
          <Daycare />
          <Grooming />
          <Forms />
          <FAQs />
      <Footer />
    </div>
  );
}

export default Website;

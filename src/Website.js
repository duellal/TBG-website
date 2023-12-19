import React from 'react';
import { Outlet } from 'react-router-dom';

import './styles/website.css';

//components
import Footer from './pages/footer';
import Header from './pages/header/header';

function Website() {
  return (
    <div className="App">
      <Header />
        <Outlet />
      <Footer />
    </div>
  );
}

export default Website;

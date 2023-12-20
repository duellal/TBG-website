import React from 'react';
import { Outlet } from 'react-router-dom';

import './styles/website.css';

//components
import Footer from './pages/header-footer/footer';
import Header from './pages/header-footer/header';

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

import React from 'react';
import { Outlet } from 'react-router-dom';

import './styles/website.css';

//components
import Footer from './pages/header-footer/footer';
import Header from './pages/header-footer/header';
import ScrollToTop from './scrollToTop';

function Website() {
  return (
    <div className="App">
      <Header />
        <ScrollToTop />
        <Outlet />
      <Footer />
    </div>
  );
}

export default Website;

import logo from './images/TBG-logo.png';
// import './styles/general.css';

//components
import About from './components/about';
import Boarding from './components/boarding';
import Daycare from './components/daycare';
import FAQs from './components/FAQs';
import Footer from './components/footer';
import Forms from './components/forms';
import Grooming from './components/grooming';
import Header from './components/header';
import Home from './components/home';

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

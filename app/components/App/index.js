import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './../Router';
import Navigation from '../Navigation';
import MobileNav from '../MobileNav';
import Footer from '../Footer';
import './App.css';

function App() {
  const [navIn, setNavIn] = useState(false)
  const toggleMobNav = () => setNavIn(!navIn)
  const closeMobNav = () => navIn && setNavIn(false)

  return (
    <div className="App">
      <Navigation navIn={navIn} hideNav={closeMobNav}/>
      <MobileNav toggleMobNav={toggleMobNav}/>
      <div id="not-nav" onClick={closeMobNav}>

      <BrowserRouter>
        <Routes/>
      </BrowserRouter>

      </div>
      <Footer />
    </div>
  );
}

export default App;

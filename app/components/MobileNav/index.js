import React from "react";
import "./MobileNav.css";
import logo from './../../images/jrv-logo.avif';

function MobileNav({toggleMobNav}) {

  return (
    <div className="MobileNav">
      <div className="content">
        <button onClick={toggleMobNav}>
          <img src={`${logo}`} alt="jay vigilla logo" />
        </button>
        <p className="h1"><b>jayVigilla()</b></p>
      </div>
    </div>
  );
}

export default MobileNav;
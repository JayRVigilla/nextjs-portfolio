import React from "react";
import "./MobileNav.css";
import logo from './../../images/jrv-logo.avif';
import Image from 'next/image';


function MobileNav({toggleMobNav}) {

  return (
    <div className="MobileNav">
      <div className="content">
        <button onClick={toggleMobNav}>
          <Image src={`${logo}`} alt="jay vigilla logo" />
        </button>
        <p className="h1"><b>jayVigilla()</b></p>
      </div>
    </div>
  );
}

export default MobileNav;
import React from 'react';
import './Navigation.css';
import logo from './../../images/jrv-logo.avif'
import {pages} from './content'
import Image from 'next/image';

/**
 * Navigation Bar:
 *    - creates links based on linkArr
 *    - logo and company name on opposite end of nav bar
 */
const urlFangs = window.location.href.split('/')
function Navigation({ navIn }) {
  const xtra = navIn ? 'slide-in' : ''

  return (
    <nav id="Navigation" className={`${xtra}`}>
      <header className="nav header">
        <div className="nav logo">
          <a href="/"><Image src={logo} alt="jayVigilla()" /></a>
        </div>

        <div className='nav links'>
          {pages.map((p, i) => {
            return urlFangs.at(-1) !== p.href.substring(1) &&
              <a key={`navlink-${i}`} href={p.href} target={p.target || "_self"}>{p.name}</a>
          })}
        </div>
          <p className="h1"><b>jayVigilla()</b></p>
      </header>
    </nav>
  );
}

export default Navigation;

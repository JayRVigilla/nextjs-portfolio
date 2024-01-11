import React from 'react';
import './Logo.css';

function Logo({ logoImg, logoText}) {
  return (
    <div className="Logo">
      <a href="/">
        <img src={`${logoImg.src}`} alt={`${logoImg.alt}`} />
        <b><p>{logoText}</p></b>
      </a>
    </div>
  );
}

export default Logo;

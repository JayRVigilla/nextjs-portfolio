import React from 'react';
import './Logo.css';
import Image from 'next/image';

function Logo({ logoImg, logoText}) {
  return (
    <div className="Logo">
      <a href="/">
        <Image src={`${logoImg.src}`} alt={`${logoImg.alt}`} />
        <b><p>{logoText}</p></b>
      </a>
    </div>
  );
}

export default Logo;

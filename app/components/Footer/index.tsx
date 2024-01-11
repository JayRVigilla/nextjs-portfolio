'use client'
import React from 'react';
import './Footer.css';
import {links} from './content'

function Footer() {
  return (
    <>
        {/* CDN for FontAwesome icons in the Footer
        // TODO: add this to Footer component only?
      */}
  <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.3.1/css/all.css'></link>

    <footer id="Footer">
      <div className="content">
        <div>
          {links.map((link, index) => {
            return (<a href={link.href} rel="noreferrer" target="_blank" key={`link-${index}`} aria-label={link.label}>
              <i className={link.className}></i>
            </a>)
          })}

          <a href="https://docs.google.com/document/d/1tcBFgMeIVEc1ZxsDjyuwl5X0jmtrc6QdLhrslMbksoM/export?format=pdf" download="Jay Vigilla Resume" style={{ fontSize: 12, alignItems: 'center' }} aria-label="download resume">
            Resume
          </a>

        </div>
      </div>
      <p>Designed by Jay Vigilla</p>
      </footer>
      </>
  );
}

export default Footer;

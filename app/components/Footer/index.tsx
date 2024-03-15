import React from 'react';
import './Footer.css';
import {links} from './content'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer id="Footer">
      <div className="content">
        <div>
          {links.map((link, index) => {
            return (<a href={link.href} rel="noreferrer" target="_blank" key={`link-${link.label}`} aria-label={link.label}>
              <FontAwesomeIcon icon={link.icon}/>
            </a>)
          })}

          <a href="https://docs.google.com/document/d/1tcBFgMeIVEc1ZxsDjyuwl5X0jmtrc6QdLhrslMbksoM/export?format=pdf" download="Jay Vigilla Resume" style={{ fontSize: 12, alignItems: 'center' }} aria-label="download resume">
            <span>Resume</span>
          </a>

        </div>
      </div>
      <p>Designed by Jay Vigilla</p>
      </footer>
  );
}

export default Footer;

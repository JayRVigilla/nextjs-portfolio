import React from 'react';
import './Footer.css';
import {links} from './content'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib, faFilePdf } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer id="Footer">
      <div className="content">
        <div>
          {links.map((link, index) => {
            return (
              <a href={link.href} rel="noreferrer" target="_blank" key={`link-${link.label}`} aria-label={link.label}>
                <span className='label'>{link.label}</span>
                <FontAwesomeIcon icon={link.icon} />
            </a>)
          })}

          <a href="https://docs.google.com/document/d/1tcBFgMeIVEc1ZxsDjyuwl5X0jmtrc6QdLhrslMbksoM/export?format=pdf" download="Jay Vigilla Resume" aria-label="download resume">
            <span className='label'>Resume</span>
            <FontAwesomeIcon icon={faFilePdf} />
          </a>

        </div>
      </div>
      <p>Designed by Jay Vigilla</p>
      </footer>
  );
}

export default Footer;

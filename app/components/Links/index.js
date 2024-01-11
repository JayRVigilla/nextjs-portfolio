import React from 'react';
import './Links.css';

function Links({ linkArr }) {
  const styles = {
    listStyleType: "none"
  }
  const renderLinks = (links) =>
    links.map((link, idx) =>
      <li key={idx}>
        <a href={`${link.href}`}>
          {link.label}
        </a>
      </li>)

  return (
      <ul className="Links" style={styles}>
        {renderLinks(linkArr)}
      </ul>
  );
}

export default Links;
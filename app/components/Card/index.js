import React from 'react';
import { v4 as uuid } from 'uuid';
import './Card.css';

/**
 * Container for picture and div holding an h2 and text
 *
 * @param {String} title
 * @param {Object} img { src, alt }
 * @param {String} desc
 * @param {Array} tech
 * @param {Array} links [{GitHub: url}, {Link: url}]
 * @param {String} key
 */


function Card({ title, img, desc, tech, links}) {
  const techStr = tech.join(' | ');

  const genLinks =
    links.map(item => {
      return (<a key={ uuid()}href={item.url} target="_blank" rel="noreferrer">{item.type}</a>)
    })

  return (
    <div className="Card">
      <div className="top">
        <h3>{title}</h3>
        <img src={img.src} alt={img.alt} />
      </div>

      <div className="content">
        <p className="indent">{desc}</p>
        <i><p className="techs">{techStr}</p></i>
        <div>{genLinks}</div>
      </div>
    </div>
  );
}

export default Card;
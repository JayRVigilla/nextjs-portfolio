'use client'
import './Card.css';
import Image from 'next/image';
import { Project } from '@/app/content';

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


function Card({ title, img, desc, tech, links}: Project) {
  const techStr = tech.join(' | ');

  const genLinks =
    links.map(item => {
      return (<a key={ item.url.substring(8,14)}href={item.url} target="_blank" rel="noreferrer">{item.type}</a>)
    })

  return (
    <div className="Card">
      <div className="top">
        <h3>{title}</h3>
        <Image src={img.src} alt={img.alt} width={400} height={400} />
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
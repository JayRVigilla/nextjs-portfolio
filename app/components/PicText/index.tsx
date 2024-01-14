import Image from 'next/image';
import './PicText.css';
import { LinkData, ImageData } from '@/app/types';

/**
 * Container for picture and div holding an h2 and text
 *
 * @param {Object} img {src, alt, width(str), fit(str)}
 * @param {String} title
 * @param {Array} text [str, str,..., str]
 * @param {Boolean} right when true, positions image to the right
 * @param {Object} link {href(str), text(str)}
 */

interface iProps {
    img: ImageData;
    title: string;
    text: Array<string>;
    right: boolean | undefined;
    link?: LinkData;
    box?: boolean;
}
export default function PicText({ img, title, text, right, link, box = false }:iProps) {
  const isImgSticky = false

  const makePs = (arr: string[]) =>
    arr.map(str => {
      return (<p key={str.substring(0,7)}>{str}</p>)
    })

  const styleObj = {
    // picWidth: img.picWidth || 'auto',
    objectFit: img.fit,
    position: (isImgSticky ? "sticky" : "relative") as "sticky" | "relative",
    top: isImgSticky ? "15vh" : undefined
  }


  return (
    <div className={`pic-text ${right ? 'pic-right' : null} ${box ? 'box' : null}`} >
      <div className='img-container'>
      <Image src={img?.src} alt={img?.alt} style={styleObj} priority/>
      </div>
      <div className="desc">
        {title && <h2>{title}</h2>}
        {text ? makePs(text) : <p>Loading...</p>}
        {link && <a className="button" href={link.href} target={link.href[0] === '/' ? "_self" : "_blank"} rel="noreferrer">{link.text}</a>}
      </div>
    </div>
  )
}
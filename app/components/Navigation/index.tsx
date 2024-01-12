'use client'
import { usePathname } from 'next/navigation';
import './Navigation.css';
import {pages} from './content'
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/jrv-logo.jpeg'

/**
 * Navigation Bar:
 *    - creates links based on linkArr
 *    - logo and company name on opposite end of nav bar
 */

interface iProps{
  navIn: boolean;
}


function Navigation({ navIn }: iProps) {
  const pathname = usePathname()

  const xtra = navIn ? 'slide-in' : ''

  return (
    <nav id="Navigation" className={`${xtra}`}>
      <header className="nav header">
        <div className="nav logo">
          <Image src={logo} alt="jayVigilla()" />
        </div>

        <div className='nav links'>
          {pages.map((p, i) => {
            return pathname !== p.href.substring(1) &&
              <Link key={`navlink-${i}`} href={p.href} target={p.target || "_self"}>{p.name}</Link>
          })}
        </div>
          <p className="h1"><b>jayVigilla()</b></p>
      </header>
    </nav>
  );
}

export default Navigation;

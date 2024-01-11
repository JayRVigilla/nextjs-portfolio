// import MetaTags from 'react-meta-tags';
import React, {useState} from 'react'
import Image from 'next/image';
import './Home.css';
import PicText from '@/app/components/PicText';
import coffeeCup from '@/app/images/coffee-cup.avif';
import { teasers } from './content';
import Navigation from '@/app/components/Navigation';
import MobileNav from '@/app/components/Navigation'

export const HomeContent = ()=> {
  const [navIn, setNavIn] = useState(false)
  const toggleMobNav = () => setNavIn(!navIn)
  const closeMobNav = () => navIn && setNavIn(false)

  return (
        <div className="App">
      {/* <Navigation navIn={navIn} hideNav={closeMobNav}/>
      <MobileNav toggleMobNav={toggleMobNav}/> */}
      <div id="not-nav" onClick={closeMobNav}>
{/* // TODO: put routes in here */}
      </div>
      {/* <Footer /> */}
    <div id="Home">
      <header>
        <div className="home container">
          <Image src={coffeeCup} alt="coffee cup by Annie Spratt"/>
          <div className="headline">
            <h1>Hi, my name is Jay Vigilla.<br /><code>#IBuildThingsWithComputers</code></h1>
          </div>
        </div>
      </header>

      <section className="teaser about">
        <h2>{`Who's this?`}</h2>
        <div className="content">
          <p>{`Today I'm a Software Engineer... and a coffee fiend, doggy daddy, human dad, former restaurant cook, recovering comic book collector, maker of longer-than-necessary lists, and lover of puns.`}</p>
          <p>{`I got my Bachelor's in Psychology and started cooking in restaurants because I loved the closeness of my kitchen families and the adrenaline rush of restaurant service!`}</p>
          <a className="button" href="/about">Ready to know more?</a>
        </div>
      </section>

      {teasers.map((teaser, index) => {
        return (
          <section className={`teaser ${teaser.title.toLowerCase()}`} key={`teaser-${index}`}>
            <PicText
              img={teaser.img}
              title={teaser.title}
              text={teaser.text}
              right={teaser.right}
              link={teaser.link}
              box={teaser.box} />
          </section>
        )
      })}
      </div>
      </div>
  );
}

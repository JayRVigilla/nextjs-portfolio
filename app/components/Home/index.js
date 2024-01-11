import React from 'react';
import MetaTags from 'react-meta-tags';
import './Home.css';
import PicText from './../PicText';
import coffeeCup from './../../images/coffee-cup.avif';
import { teasers } from './content';
import notebook from './../../images/notebook.avif'

function Home() {

  return (
    <div id="Home">
      <MetaTags>
        <title>Jay Vigilla | Web Developer | Software Engineer | San Francisco</title>
        <meta name="description" content="Jay Vigilla is a Software Engineer based in the San Francisco Bay Area experienced in JavaScript(React-Redux, NodeJS), Python, SQL, and responsive design" />
        <meta property="og:title" content="Jay Vigilla | Web Developer | Software Engineer | San Francisco" />
        <meta property="og:description" content="San Francisco-based Software Engineer versed in JavaScript(React-Redux, NodeJS), Python, SQL, and responsive design." />
        <meta property="og:image" content={notebook} />
        <link rel="canonical" href="http://jayvigilla.com" />
      </MetaTags>
      <header>
        <div className="home container">
          <img src={coffeeCup} alt="coffee cup by Annie Spratt"/>
          <div className="headline">
            <h1>Hi, my name is Jay Vigilla.<br /><code>#IBuildThingsWithComputers</code></h1>
          </div>
        </div>
      </header>

      <section className="teaser about">
        <h2>Who's this?</h2>
        <div className="content">
          <p>Today I'm a Software Engineer... and a coffee fiend, doggy daddy, human dad, former restaurant cook, recovering comic book collector, maker of longer-than-necessary lists, and lover of puns.</p>
          <p>I got my Bachelor's in Psychology and started cooking in restaurants because I loved the closeness of my kitchen families and the adrenaline rush of restaurant service!</p>
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
  );
}

export default Home;

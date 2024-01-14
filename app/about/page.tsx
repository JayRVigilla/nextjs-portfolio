import React, {useState, useEffect} from 'react';
// import MetaTags from 'react-meta-tags';
import jayPic from './../../jay-green-wall.jpeg';
import PicText from '@/app/components/PicText';
import './About.css';
import { aboutObj } from './content'
// import $ from "jquery"

const About = () => {
  const { img, text, right } = aboutObj

  // }, [])
  return (
    <section id="About">
      {/* <MetaTags>
        <title>About Jay Vigilla | Web Developer | San Francisco Bay Area</title>
        <meta name="description" content="Learn more about Jay Vigilla, a Chef turned Software Engineer in the Bay Area experienced in JavaScript, Python, SQL, and responsive design." />
        <meta property="og:title" content="About Jay Vigilla | Web Developer | Software Engineer | San Francisco" />
        <meta property="og:description" content="Learn more about Jay Vigilla, a Chef turned Software Engineer in the Bay Area experienced in JavaScript, Python, SQL, and responsive design." />
        <meta property="og:image" content={jayPic} />
        <link rel="canonical" href="http://jayvigilla.com/about"/>
      </MetaTags> */}

      <h1>About</h1>
            <PicText
            img={img}
            text={text}
            right={right}
            title=''
          />

      {/* {typeof content == 'string' && calledApi
        ? (
          <div dangerouslySetInnerHTML={createMarkup(content)}/>
          ) : (
            <PicText
            img={img}
        text={text}
            right={right}
            isImgSticky={true}
          />

        )} */}
  </section>
  );
}

export default About;

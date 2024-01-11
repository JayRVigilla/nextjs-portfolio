import React, {useState, useEffect} from 'react';
import MetaTags from 'react-meta-tags';
import jayPic from './../../images/jay-green-wall.avif';
import PicText from './../PicText';
import { getAbout } from '../../api'
import './About.css';
import { aboutObj } from './content'
// import $ from "jquery"

const About = () => {
  const { img, text, right } = aboutObj
  const [content, setContent] = useState(undefined)
  const [calledApi, setCalledApi] = useState(false)

  const createMarkup = (string) => {
    return {__html: string}
  }

  // prep for when content moved to a CMS
  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const data = await getAbout()
        setCalledApi(true)
        setContent(data)
      } catch (err) {
        return err
      }
    }
    fetchAbout()
  }, [])

  // useEffect(() => {
  //   const descHeight = $("div.desc").height()
  //   const imgHeight = $("img").height()

  //   console.log('***Logger About\n\n decsHeight', descHeight, '\n\n ***')
  //   console.log('***Logger About\n\n imgHeight', imgHeight, '\n\n ***')

  // }, [])
  return (
    <section id="About">
      <MetaTags>
        <title>About Jay Vigilla | Web Developer | San Francisco Bay Area</title>
        <meta name="description" content="Learn more about Jay Vigilla, a Chef turned Software Engineer in the Bay Area experienced in JavaScript, Python, SQL, and responsive design." />
        <meta property="og:title" content="About Jay Vigilla | Web Developer | Software Engineer | San Francisco" />
        <meta property="og:description" content="Learn more about Jay Vigilla, a Chef turned Software Engineer in the Bay Area experienced in JavaScript, Python, SQL, and responsive design." />
        <meta property="og:image" content={jayPic} />
        <link rel="canonical" href="http://jayvigilla.com/about"/>
      </MetaTags>

      <h1>About</h1>
      {typeof content == 'string' && calledApi
        ? (
          <div dangerouslySetInnerHTML={createMarkup(content)}/>
          ) : (
            <PicText
            img={img}
        text={text}
            right={right}
            isImgSticky={true}
          />

        )}
  </section>
  );
}

export default About;

import React from 'react';
import Card from '../Card';
import MetaTags from "react-meta-tags";
import { v4 as uuid } from 'uuid';
import './Projects.css';
import jayPic from './../../images/jay-green-wall.avif';
import {projects, experiments, games} from './content'

function Projects() {

  const projectCards = (proj) => proj.map(p =>
    <Card
      key={uuid()}
      title={p.title}
      img={p.img}
      desc={p.desc}
      tech={p.tech}
      links={p.links}
    />
  )

  return (
    <div id="Projects">
      <MetaTags>
        <title>Portfolio | Jay Vigilla | Web Developer | Software Engineer</title>
        <meta name="description" content="Looking for a Software Engineer versed in JavaScript(React-Redux, NodeJS), Python, SQL, SEO, and responsive design?" />
        <meta property="og:title" content="Portfolio | Jay Vigilla | Web Developer | Software Engineer " />
        <meta property="og:description" content="Looking for a Software Engineer versed in JavaScript(React-Redux, NodeJS), Python, SQL, SEO, and responsive design?" />
        <meta property="og:image" content={jayPic} />
        <link rel="canonical" href="http://jayvigilla.com/projects" />
      </MetaTags>

      <h1>Projects</h1>
      <section className="projects">
        <h2>Full Projects</h2>
        <div className='project-list'>
          {projectCards(projects)}
        </div>
      </section>
      <section className="experiments">
        <h2>Games</h2>
        <div className='project-list'>
          {projectCards(games)}
        </div>
      </section>
      <section className="experiments">
        <h2>Experiments</h2>
        <p>Fun and experimentation in CodeSandbox.</p>
        <div className='project-list'>
          {projectCards(experiments)}
        </div>
      </section>
    </div>
  );
}

export default Projects;
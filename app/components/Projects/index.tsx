import Card from "../Card"
import { Project, projects, games, experiments } from "@/app/content"
import './Projects.css'

const projectCards = (proj: Project[]) => {
  return (
    <div className='project-cards'>
    {proj.map(p =>
      <Card
        key={p.title}
        title={p.title}
        img={p.img}
        desc={p.desc}
        tech={p.tech}
        links={p.links}
        />)
  }
    </div>)
}

export const Projects = () => {
  return (
    <section className="teaser builds">
      <h2>Projects/Builds</h2>
      <div id="project-type-selector">
        <a href="#project-list-projects">projects</a>
        <a href="#project-list-games">games</a>
        <a href="#project-list-experiments">experiments</a>
      </div>
      <div className='project-list projects' id="project-list-projects">
        <h3>Full Projects</h3>
        {projectCards(projects)}
      </div>
      <div className='project-list games' id="project-list-games">
        <h3>Games</h3>
        <p>Just a little fun</p>
        {projectCards(games)}
      </div>
      <div className='project-list experiments' id="project-list-experiments">
        <h3>Experiments</h3>
        <p>Fun and experimentation in CodeSandbox.</p>
        {projectCards(experiments)}
      </div>
    </section>)
}
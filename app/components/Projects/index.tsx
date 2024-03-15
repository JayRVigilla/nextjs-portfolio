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
      <div className="tabs">
        <div className="tab-selectors">

        <input type="radio" name="tabs" id="tab1" />
          <label htmlFor="tab1"><span>projects</span>
          </label>
        <input type="radio" name="tabs" id="tab2"/>
          <label htmlFor="tab2"><span>games</span>
          </label>
        <input type="radio" name="tabs" id="tab3"/>
          <label htmlFor="tab3"><span>experiments</span>
          </label>
        </div>

        <div className='project-list projects tab-content' id="tab-content--1">
          <h3>Full Projects</h3>
          {projectCards(projects)}
          </div>

        <div className='project-list games tab-content' id="tab-content--2">
          <h3>Games</h3>
          <p>Just a little fun</p>
          {projectCards(games)}
          </div>

        <div className='project-list experiments tab-content' id="tab-content--3">
          <h3>Experiments</h3>
          <p>Fun and experimentation in CodeSandbox.</p>
          {projectCards(experiments)}
          </div>

      </div>
    </section >
    )
}
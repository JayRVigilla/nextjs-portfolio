import styles from './page.module.css'
import "./Home.css"
import { BeamIn } from './components/BeamIn';
import { experienceContent } from './content'
import { JobCard } from './components/JobCard';
export default function Main() {

  return (
    <>
    <main className={styles.main}>
      <div id="Home">
          <div className="home container">
          <div className="headline">
            <BeamIn>
                <h1>Jay Vigilla
                  <br />
                  <code>Software Engineer</code>
                </h1>
            </BeamIn>
          </div>
      </div>

          <section className="teaser about">
            <h2>{`Who's this?`}</h2>
            <p>{` I became an Engineer to make technology benefitting people and communities. As a kid, i was a tinkerer that liked to take things apart and put them back together. Playing with technology and building things is my favorite part of the job.`}</p>

            <p>{`Fast-moving environments are where I thrive. Before becoming an Engineer, I managed restaurant kitchens in the San Francisco Bay Area and corporate food service at Google's Main Cafeteria. Today, I am passionate about what I create as an Engineer to ensure technology is as welcoming and inviting as your favorite corner restaurant.`}</p>
          </section>

          <section className="teaser jobs">
            <h2>Experience</h2>
            <div className='job-cards'>

            {experienceContent.map((job) => {
              return <JobCard
              businessName={job.businessName}
              start={job.start}
              end={job.end}
              description={job.description}
              tags={job.tags}
              press={job.press}
              key={`job-card-${job.businessName.toLowerCase()}`}
              />
            })}
            </div>
          </section>

          <section className="teaser builds">
            <h2>Projects/Builds</h2>
            <p>**Component for projects. click to open modal with quick write up about my work there. ideally witha link with it deployed</p>
          </section>

          </div>

    </main>
    </>
  )
}

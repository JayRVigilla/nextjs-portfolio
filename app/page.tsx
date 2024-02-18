import Image from 'next/image'
import styles from './page.module.css'
// import PicText from '@/app/components/PicText';
import { teasers } from '@/app/content';
import "./Home.css"
import coffeeCup from "@/public/coffee_cup.jpeg"
import { BeamIn } from './components/BeamIn';
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
                  <em>Software Engineer</em>
                  <br />
                  <code>IBuildThingsForPeopleWithComputers()</code>
                </h1>
            </BeamIn>
          </div>
      </div>

          <section className="teaser about">
            <h2>{`Who's this?`}</h2>
            <p>{`Years before I was a Software Engineer, I was a restaurant chef. I enjoyed working shoulder to shoulder with other passionate individuals that just wanted to make our patrons happy.`}</p>
            <p>{`My name is Jay Vigilla, a Software Engineer experienced in building UI/UX using React. I love talking about user experience and understanding the use case for the apps I'm making. I've been most fulfilled working with organizations utilizing technology to make an impact in society or an Industry. `}</p>
          </section>

          <section className="teaser jobs">
            <h2>Experience</h2>
            <p>**Component featuring Company logos. click to open modal with quick write up about my work there. Cold even make it look more like a resume. </p>
            {/* //TODO: create Badge Component, primarily for Tech to highlight in Jobs and Projects */}
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

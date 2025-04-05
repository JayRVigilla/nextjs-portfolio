import styles from './page.module.css'
import "./Home.css"
import { Jobs } from './components/Jobs';
// import { Projects } from './components/Projects';
import { About } from './components/About';
import { Blog } from './components/Blog';
export default function Main() {

return (
  <>
    <main className={styles.main}>
      <div id="Home">
        <header className="home container">
          <div className="headline">
              <h1>
                Jay Vigilla
                <br />
                <code>Software Engineer</code>
              </h1>
          </div>
        </header>

        <About />
        <Jobs />
        <Blog/>
        {/*
        TODO: redo projects section
        some projects are not deployed properly
        create some write ups about contract work
        <Projects />
        */}
      </div>
    </main>
  </>
)
}

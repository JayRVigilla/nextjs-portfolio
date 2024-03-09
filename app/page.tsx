import styles from './page.module.css'
import "./Home.css"
import { BeamIn } from './components/BeamIn';
import { Jobs } from './components/Jobs';
// import Projects from './projects/page';
import { Projects } from './components/Projects';
import { About } from './components/About';
export default function Main() {

return (
  <>
    <main className={styles.main}>
      <div id="Home">
        <header className="home container">
          <div className="headline">
            <BeamIn>
              <h1>Jay Vigilla
                <br />
                <code>Software Engineer</code>
              </h1>
            </BeamIn>
          </div>
        </header>

        <About />
        <Jobs />
        <Projects />
      </div>
    </main>
  </>
)
}

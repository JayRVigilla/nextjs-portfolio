import styles from './page.module.css'
import "./Home.css"
import { Jobs } from './components/Jobs';
import { Projects } from './components/Projects';
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
                <code>Software Engineer</code> | <code>Cook to Coder</code>
              </h1>
          </div>
        </header>

        <About />
        <Blog/>
        <Jobs />
        <Projects />
      </div>
    </main>
  </>
)
}

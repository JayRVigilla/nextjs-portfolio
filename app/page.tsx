// import styles from "./page.module.css";
import "./Home.css";
import { Jobs } from "@components/Jobs";
import { About } from "@components/About";
import { Blog } from "@components/Blog";
export default function Main() {
  return (
        <div id="Home">
          <header className="home container">
            <div className="headline">
              <h1>
                Jay Vigilla
                <br />
                {/* <code>Software Engineer</code> */}
                {/* <span>Software Engineer</span> */}
              </h1>
              {/* <h2>Software Engineer</h2>
              <h2>Problem solver</h2>
              <h2>User Advocate</h2>
              <h2>Organizes chaos</h2> */}
              <h2>Software Engineer | Problem solver | Team builder | Organizes chaos</h2>
            </div>
          </header>

          <About />
          <Jobs />
          <Blog />
          {/*
        TODO: redo projects section
        some projects are not deployed properly
        create some write ups about contract work
        <Projects />
        */}
        </div>
  );
}

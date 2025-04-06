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
              </h1>
              <h2>Software Engineer | Problem solver | Team builder | Organizes chaos</h2>
            </div>
          </header>
        </div>
  );
}

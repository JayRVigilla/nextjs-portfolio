import Image from 'next/image'
import styles from './page.module.css'
import PicText from '@/app/components/PicText';
import { teasers } from '@/app/content';
import "./Home.css"
import coffeeCup from "@/public/coffee_cup.jpeg"
import jayDesk from "@/public/jay_desk.jpeg"
import { Metadata } from 'next';
import { BeamIn } from './components/BeamIn';
export default function Main() {

  const About = () => {
    return (
      <>
    <h2>{`Who's this?`}</h2>
          <p>{`I'm a Software Engineer experienced in Front End development using React (both Classes and Hooks) to make performant UI/UX.`}</p>
          <p>{`Living in the San Francisco Bay Area I'm a coffee fiend, doggy daddy, human dad, former restaurant cook, recovering comic book collector, maker of longer-than-necessary lists, and lover of puns.`}</p>
      </>
  )
}
  const headlines = ["DadJokeAficionado", "IBuildThingsWithComputers", "EngineerInSanFranciscoBayArea", "CodingIsFun", "ReactDeveloper", "FullStackDeveloper"]
  
function shuffle(array: Array<any>) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

  const headlineGenerator = (headlineArray : Array<string>) => {
    const shuffledHeadlines = shuffle(headlineArray)
    console.log(shuffledHeadlines)
    const rnd = Math.floor(Math.random() * shuffledHeadlines.length)
    console.log("headlineGenerator", rnd)
    return shuffledHeadlines[rnd]
  }

  return (
    <>
    <main className={styles.main}>
      <div id="Home">
        <div className="home container">
          <Image src={coffeeCup} alt="coffee cup by Annie Spratt" priority/>
          <div className="headline">
            <BeamIn>
                <h1>Jay Vigilla
                  <br />
                  <em>Software Engineer</em>
                  <br />
                  {/* <code>#IBuildThingsWithComputers</code> */}
                  <code>#{headlineGenerator(headlines)}</code>
                </h1>
            </BeamIn>
          </div>
      </div>

          <section className="teaser about">
            {/* // TODO: About becomes static, Experience section is Beamed in */}
              <About />
          </section>

      {teasers.map((teaser, index) => {
        return (
          <section className={`teaser ${teaser.title.toLowerCase()}`} key={`teaser-${index}`}>
            <PicText
              img={teaser.img}
              title={teaser.title}
              text={teaser.text}
              right={teaser.right}
              link={teaser.link}
              box={teaser.box}
            />
          </section>
        )
      })}
          </div>

    </main>
    </>
  )
}

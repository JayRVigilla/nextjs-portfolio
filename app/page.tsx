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

  return (
    <>
    <main className={styles.main}>
      <div id="Home">
        <div className="home container">
          <Image src={coffeeCup} alt="coffee cup by Annie Spratt" priority/>
          <div className="headline">
            <h1>Hi, my name is Jay Vigilla.<br /><code>#IBuildThingsWithComputers</code></h1>
          </div>
      </div>

          <section className="teaser about">
            {/* // TODO: About becomes static, Experience section is Beamed in */}
            <BeamIn><About /></BeamIn>
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

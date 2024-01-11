import Image from 'next/image'
import styles from './page.module.css'
import '@/app/pages/home/Home.css';
import PicText from '@/app/components/PicText';
import { teasers } from '@/app/pages/home/content';
import notebook from '@/app/public/images/notebook.avif'
import Footer from './components/Footer';

export default function Main() {
// const [navIn, setNavIn] = useState(false)
  // const toggleMobNav = () => setNavIn(!navIn)
  // const closeMobNav = () => navIn && setNavIn(false)
  // const toggleMobNav = () => {}
  // const closeMobNav = () => {}


  return (
    <>
      {/* CDN for FontAwesome icons in the Footer
        // TODO: add this to Footer component only?
      */}
  <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.3.1/css/all.css'></link>

    <main className={styles.main}>
      <div className="App">
      {/* <Navigation navIn={navIn} hideNav={closeMobNav}/>
      <MobileNav toggleMobNav={toggleMobNav}/> */}
      <div id="not-nav" >
{/* // TODO: put routes in here */}
          <div id="Home">
      <header>
        <div className="home container">
            {/* <Image src="https://images.unsplash.com/photo-1458819714733-e5ab3d536722?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="coffee cup by Annie Spratt"  width={1200} height={600} /> */}
            <Image src="/images/coffeeCup.avif" alt="coffee cup by Annie Spratt"  width={1200} height={600} />
          <div className="headline">
            <h1>Hi, my name is Jay Vigilla.<br /><code>#IBuildThingsWithComputers</code></h1>
          </div>
        </div>
      </header>

      <section className="teaser about">
        <h2>{`Who's this?`}</h2>
        <div className="content">
          <p>{`Today I'm a Software Engineer... and a coffee fiend, doggy daddy, human dad, former restaurant cook, recovering comic book collector, maker of longer-than-necessary lists, and lover of puns.`}</p>
          <p>{`I got my Bachelor's in Psychology and started cooking in restaurants because I loved the closeness of my kitchen families and the adrenaline rush of restaurant service!`}</p>
          <a className="button" href="/about">Ready to know more?</a>
        </div>
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
              box={teaser.box} />
          </section>
        )
      })}
          </div>
          </div>
        <Footer />
      </div>

    </main>
    </>
  )
}

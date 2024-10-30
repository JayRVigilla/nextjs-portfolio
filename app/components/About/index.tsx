export const About = () => {
  return (
    <section className="teaser about">
      <h2>{`About Me`}</h2>
      <br />
      <p>{`Hi! I'm Jay, a Front End Engineer the San Francisco Bay Area.`}</p>
      <br />
      <p>{`The quick list:`}</p>
      <ul>
        <li>{`React, Javascript/Typescript, CSS are my go-to tools. And most recently, NextJS!`}</li>
        <li>
          {`I love looking at things from a 50k ft view and learning how the small pieces work to make the big things move.`}
        </li>
        <li>{`Pressure doesn't phase me. I've worked in high-pressure environments and thrived. Diamonds From Coal!`}</li>
        <li>{`Puns are my love language.`}</li>
      </ul>

      <br />
      <p>{`As a kid, I was a tinkerer. I took things apart and (mostly) put them back together. Luckily, my parents were patient. I took the time to understand what things did and hiding the spare pieces from my parents. Playing with technology and building things is my favorite part of the job.`}</p>
    </section>
  );
};

import "./style.css";
export default function About() {
  return (
    <section className="teaser about">
      <h2>{`About Me`}</h2>
      <br />
      <p>
        My name is Jay Vigilla, and I'm a Software Engineer experienced building
        user interfaces and customer-facing product features in secure
        Health-Tech startups. Bringing clarity and inspiration from ambiguity is
        a skill I've developed working in high pressure environments where the
        expectation is to ship to users constantly.
      </p>

      <p>
        {" "}
        My focus has been translating product stories and requirements into
        performant code with a clear narrative. This is all to say: I write
        Front End code that works for users the way it should.
      </p>
      <p>The quick list:</p>
      <ul>
        <li>
          React, Javascript/Typescript, semantic HTML, and CSS are my go-to
          tools.
        </li>
        <li>I love learning new tools and tech by building with it.</li>
        <li>
          Former chef: pressure doesn't phase me. I've thrived in high-pressure
          environments while teaching varying skill levels.
        </li>
        <li>Puns are my love language.</li>
      </ul>

      <p>In my free time I explore the San Francisco Bay Area for original ice cream flavors, play ukelele covers with my kids, and pun like no one can stop me.</p>
    </section>
  );
}

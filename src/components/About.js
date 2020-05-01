import React from "react";
import Pomodoro from "./Pomodoro";

const about = () => {
  return (
    <section id="section-about" className="grid left center-col col-2">
      <h2 className="heading-secondary about__heading">About</h2>

      <div className="grid col-1 left about__column">
        <h3 className="heading-tertiary">Welcome to my playground</h3>
        <p className="paragraph">
          It is a work in progress. The most recent major update is converting
          from a WordPress site to a React SPA. Being up against a timeline, the
          first implementation is a basic one-page React site. Routers and Redux
          will follow.
        </p>
        <p className="paragraph">
          The fun elements like the animated tomato above and the ‘outer limits’
          Work filter button were created as course lessons and rewritten as
          React Components. You’ll find these projects inserted throughout my
          site. These are the type of components I create when I need a break
          from practicing React and Redux, Routers.{" "}
        </p>
        <p className="paragraph">
          The Work section is the most active. I’ve been doing a lot of comp to
          React mini projects from FrontEndMentor.io . Other course work
          includes modern react/redux, Vanilla JavaScript exercises.{" "}
        </p>
        <p className="paragraph">
          What is next? More practice. Practice, practice, practice. In line
          with my life goal to travel while working remotely, to practice some
          data visualization to help decide where to visit.
        </p>
      </div>
      <div className="grid col-1 center about__column">
        <Pomodoro />
      </div>
      <div className="grid col-3  center full-width">
        <a
          href="https://linkedin.com/in/c-healey"
          className="btn-txt about__btn"
        >
          Linked In &rarr;
        </a>
        <a href="https://github.com/c-healey" className="btn-txt about__btn">
          GitHub &rarr;
        </a>
        <a
          href="https://flying-pancakes77.tumblr.com/"
          className="btn-txt about__btn"
        >
          Flying Pancakes &rarr;
        </a>
      </div>
    </section>
  );
};
export default about;

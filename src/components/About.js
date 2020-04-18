import React from "react";

const about = () => {
  return (
    <section id="section-about" className="section-about">
      <h2 className="heading-secondary about__heading">About</h2>

      <div className="about__column">
        <h3 className="heading-tertiary">Career-wise</h3>
        <p className="paragraph">
          I’m returning to my software development roots after a long break. I
          like the creativity in building things. I like a degree of stability
          too. When the 2007 great recession hit I was laid off when Cerberus
          acquired Chrysler from Daimler. My friends who stayed in development
          had work, I did not. The demand for software developers is high and
          the obstacles to learning gone. I’m back doing one of my favorite
          things.{" "}
        </p>
        <a href="/CV" className="btn-txt about__btn">
          Curriculum Vitae &rarr;
        </a>
      </div>
      <div className="about__column">
        <h3 className="heading-tertiary">
          Mom, wife, animal friend, label reader{" "}
        </h3>
        <p className="paragraph ">
          ... and though I love my country, I fear our government. So much so
          that I'd like to move to Spain. I post my favorite things on Flying
          Pancakes. You’ll meet my pets and may want to come to dinner when my
          son is home. He’s the chef.
        </p>
        <a href="#" className="btn-txt about__btn">
          Flying Pancakes &rarr;
        </a>
      </div>
    </section>
  );
};
export default about;

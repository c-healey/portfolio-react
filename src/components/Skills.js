import React from "react";
const skillsData = [
  {
    title: "Tech Stack",
    list: ["HTML5", "CSS3", "JavaScript", "React"],
  },
  {
    title: "Dev Ops",
    list: ["Git", "CLI", "NPM", "WebPack"],
  },
];
const skillsCard = () => {
  return skillsData.map((skill, idx) => {
    return (
      <div className="card" key={`skill-card-${idx}`}>
        <div className="card__side card__side--front">
          <div className={`card__picture card__picture--${idx + 1}`}></div>
          <h4 className="card__heading">
            <span
              className={`card__heading-span card__heading-span--${idx + 1}`}
            >
              {skill.title}
            </span>
          </h4>
          <div className="card__details">
            <ul>
              {skill.list.map((list, idx) => {
                return <li key={`skill-list-${idx}`}>{list}</li>;
              })}
            </ul>
          </div>
        </div>
        <div
          className={`card__side card__side--back card__side--back-${idx + 1}`}
        >
          <div className="card__cta">
            <div className="card__price-box">
              <a href="#section-book" className="btn btn--white">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

const skills = () => {
  return (
    <section className="grid center-col section-skills" id="section-skills">
      <h2 className="heading-secondary full-width center skills__heading">
        {" "}
        Skills and Expertise
      </h2>
      {skillsCard()}
    </section>
  );
};
export default skills;

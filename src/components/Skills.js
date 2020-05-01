import React from "react";

const skills = () => {
  return (
    <section className="section-skills" id="section-skills">
      <h2 className="heading-secondary skills__heading">
        {" "}
        Skills and Expertise
      </h2>

      <div className="card">
        <div className="card__side card__side--front">
          <div className="card__picture card__picture--1"></div>
          <h4 className="card__heading">
            <span className="card__heading-span card__heading-span--1">
              Tech Stack
            </span>
          </h4>
          <div className="card__details">
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaSript</li>
              <li>PHP</li>
              <li>WordPress</li>
            </ul>
          </div>
        </div>
        <div className="card__side card__side--back card__side--back-1">
          <div className="card__cta">
            <div className="card__price-box">
              <a href="#popup" className="btn btn--white">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card__side card__side--front">
          <div className="card__picture card__picture--3"></div>
          <h4 className="card__heading">
            <span className="card__heading-span card__heading-span--3">
              Dev Ops
            </span>
          </h4>
          <div className="card__details">
            <ul>
              <li>LAMP</li>
              <li>GIT</li>
              <li>CLI</li>
              <li>Nodejs</li>
              <li>Gulp</li>
            </ul>
          </div>
        </div>
        <div className="card__side card__side--back card__side--back-3">
          <div className="card__cta">
            <div className="card__price-box">
              <a href="#popup" className="btn btn--white">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
      <a href="#" className="btn btn--green skills__btn">
        Learn More
      </a>
    </section>
  );
};
export default skills;

import React from "react";

const work = () => {
  return (
    <section id="section-work" className="section-work">
      <h2 className="heading-secondary work__heading"> Work</h2>

      <div className="work__content">
        <div className="work-nav">
          <input
            type="checkbox"
            className="work-nav__checkbox"
            id="work-navi-toggle"
          />
          <label htmlFor="work-navi-toggle" className="work-nav__button">
            <span className="work-nav__icon">?</span>
          </label>
          <div className="work-nav__background">&nbsp;</div>
          <div className="work-nav__nav" id="work-navi-toggle">
            <div className="work__txt-box">
              <div className="work__txt-heading heading-tertiary">
                Advanced CSS and SASS: Flexbox, Grid Animations and more.{" "}
              </div>
              <div className="work__paragraph">
                These are exercises in advanced CSS techniques for intermediate
                level front end developers. After completing the course, newly
                learned techniques are used in a personal project to enforce the
                lesson and test mastery. You may have noticed this course
                inspired my portfolio design. I used Natours layout, and cool
                effects. Unseen, the layout is done using CSS grid versus a
                ‘grid system’. CSS Grid is vastly easier to use and requires far
                less media queries to be fully responsive. According to
                caniuse.com, CSS grid is supported by 90% off all browsers.{" "}
              </div>
              <div className="work__paragraph">
                The list of tricks and tips packed into the course and practiced
                on my portfolio are long. Click on the button below to learn
                more. And thank you for reading this far.
              </div>
              <a href="#" className="btn btn--white btn--animated jself-center">
                Get Started
              </a>
            </div>
          </div>
        </div>
        <img
          src="./portfolio-react/img/2019-10-02-natours.png"
          alt="natours"
          className="work__img"
        />
      </div>
      <div className="work__content">
        <div className="work-nav">
          <input
            type="checkbox"
            className="work-nav__checkbox"
            id="work-navi-toggle2"
          />
          <label htmlFor="work-navi-toggle2" className="work-nav__button">
            <span className="work-nav__icon">?</span>
          </label>
          <div className="work-nav__background">&nbsp;</div>
          <div className="work-nav__nav" id="work-navi-toggle">
            <div className="work__txt-box">
              <div className="work__txt-heading heading-tertiary">
                WordPress for Developers{" "}
              </div>

              <div className="work__paragraph">
                As the title states these pieces are exercises in advanced CSS
                techniques for intermediate level front end developers. After
                completing a course, newly learned techniques are used in a
                personal
              </div>

              <a href="#" className="btn btn--white btn--animated jself-center">
                Get Started
              </a>
            </div>
          </div>
        </div>
        <img
          src="./portfolio-react/img/2019-10-19-fictional-u.png"
          alt="WordPress"
          className="work__img"
        />
      </div>

      <a href="#" className="btn-txt work__btn">
        Gallery&rarr;
      </a>
    </section>
  );
};
export default work;

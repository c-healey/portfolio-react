import React from "react";

const attributes = () => {
  return (
    <section id="section-attributes" className="section-features">
      <h2 className="heading-secondary features__heading">Key Attributes</h2>
      <div className="feature">
        <svg className="feature__icon">
          <use xlinkHref="img/sprite.svg#icon-global" />
        </svg>
        <h4 className="heading-4 heading-4--dark  feature__heading">Builder</h4>
        <p className="feauture__text">
          Coding is like creating a masterpiece. Using modern tools ensures
          detailed accuracy.
        </p>
      </div>

      <div className="feature">
        <svg className="feature__icon">
          <use xlinkHref="img/sprite.svg#icon-trophy" />
        </svg>
        <h4 className="heading-4 heading-4--dark feature__heading">
          Communicator
        </h4>
        <p className="feauture__text">
          We’ll agree on a communication plan that works for you and encompasses
          regular checkpoints and as needed conversations.
        </p>
      </div>
      <div className="feature">
        <svg className="feature__icon">
          <use xlinkHref="img/sprite.svg#icon-map-pin" />
        </svg>
        <h4 className="heading-4 heading-4--dark  feature__heading">
          Problem solver
        </h4>
        <p className="feauture__text">
          Fiercely independent… or resourceful. As a developer, things don’t
          always go as planned but deadlines must be met. I tap into a generous
          community of developers who have likely already answered my question.
          Google is my friend.
        </p>
      </div>
      <div className="feature">
        <svg className="feature__icon">
          <use xlinkHref="img/sprite.svg#icon-presentation" />
        </svg>
        <h4 className="heading-4 heading-4--dark feature__heading">
          Project Manager
        </h4>
        <p className="feauture__text">
          My project team at Chrysler Financial oversaw outsourced distributed
          teams and internal teams. I learned a lot about collaborating, caring
          for my team, managing time and deliverables. My techies were pampered.
          I want that.
        </p>
      </div>
      <div className="feature">
        <svg className="feature__icon">
          <use xlinkHref="img/sprite.svg#icon-key" />
        </svg>
        <h4 className="heading-4 heading-4--dark feature__heading">
          Lifelong learner
        </h4>
        <p className="feauture__text">
          Software dev quenches my curiosity and thirst for knowledge. It’s fun
          to break through a learning curve and deliver creative solutions.
        </p>
      </div>
      <div className="feature">
        <svg className="feature__icon">
          <use xlinkHref="img/sprite.svg#icon-profile-male" />
        </svg>
        <h4 className="heading-4 heading-4--dark feature__heading">
          Customer Focus
        </h4>
        <p className="feauture__text">
          I’ve sat on both sides of the table and played several roles in large
          corporations and mom and pop businesses. That gives me a well-rounded
          perspective.
        </p>
      </div>
    </section>
  );
};
export default attributes;

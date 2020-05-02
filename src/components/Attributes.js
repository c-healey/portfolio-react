import React from "react";
const attributeData = [
  {
    icon: "./portfolio-react/img/sprite.svg#icon-global",
    title: "Builder",
    summary:
      "Coding is like creating a masterpiece. Using modern tools ensures detailed accuracy.",
  },
  {
    icon: "./portfolio-react/img/sprite.svg#icon-trophy",
    title: "Communicator",
    summary:
      "We’ll agree on a communication plan that works for you and encompasses regular checkpoints and as needed conversations.",
  },
  {
    icon: "./portfolio-react/img/sprite.svg#icon-map-pin",
    title: "Problem solver",
    summary:
      "Fiercely independent… or resourceful. As a developer, things don’t always go as planned but deadlines must be met. I tap into a generous community of developers who have likely already answered my question. Google is my friend.",
  },
  {
    icon: "./portfolio-react/img/sprite.svg#icon-presentation",
    title: "Project Manager",
    summary:
      "My project team at Chrysler Financial oversaw outsourced distributed teams and internal teams. I learned a lot about collaborating, caring for my team, managing time and deliverables. My techies were pampered. I want that.",
  },
  {
    icon: "./portfolio-react/img/sprite.svg#icon-key",
    title: "Lifelong learner",
    summary:
      "Software dev quenches my curiosity and thirst for knowledge. It’s fun to break through a learning curve and deliver creative solutions.",
  },
  {
    icon: "./portfolio-react/img/sprite.svg#icon-heart",
    title: "Customer Focus",
    summary:
      "I’ve sat on both sides of the table and played several roles in large corporations and mom and pop businesses. That gives me a well-rounded perspective.",
  },
];
const attributes = () => {
  const attributeCard = () => {
    return attributeData.map((card, idx) => {
      return (
        <div className="feature" key={`attribute-${idx}`}>
          <svg className="feature__icon">
            <use xlinkHref={card.icon} />
          </svg>
          <h4 className="heading-4 heading-4--dark feature__heading">
            {card.title}
          </h4>
          <p className="feauture__text">{card.summary}</p>
        </div>
      );
    });
  };
  return (
    <section className="grid col-3 left center-col section-features">
      <h2 className="heading-secondary full-width work__heading">
        Key Attributes
      </h2>
      {attributeCard()}
    </section>
  );
};
export default attributes;

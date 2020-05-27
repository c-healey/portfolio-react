import React from "react";
const resourceData = [
  {
    icon: "./portfolio-react/img/96px-Visual_Studio_Code_1.35_icon.svg.png",
    title: "Visual Studio",
    url: "https://code.visualstudio.com/",
    summary:
      "Visual Studio is  a free code editor built by microsoft. It comes with Emmit built in there are hundreds of extensions available to make coding easier. CHeck out the next panel to see how I set up Visual Studio.",
  },
  {
    icon: "./portfolio-react/img/96px-Visual_Studio_Code_1.35_icon.svg.png",
    title: "My Visual Studio Setup",
    url: "https://code.visualstudio.com/",
    summary: "Theme, extensions and configuration I use",
  },
  {
    icon: "./portfolio-react/img/logo.svg",
    title: "Emmet Cheat Sheet",
    url: "https://docs.emmet.io/cheat-sheet/",
    summary:
      "Essential for writing HTML, Emmet is built into Visual Studio and Codepen to make liffe easier.",
  },
];
const resourceCard = () => {
  return resourceData.map((card, idx) => {
    return (
      <div className="feature" key={`resource-${idx}`}>
        <img className="feature__icon icon" src={card.icon} alt="icon"></img>
        <a href={card.url}>
          <h4 className="heading-4 heading-4--dark feature__heading">
            {card.title}
          </h4>
        </a>
        <p className="feauture__text">{card.summary}</p>
      </div>
    );
  });
};
const ResourcePage = () => {
  return (
    <div className="container page section-features">
      <h2 className="center-col heading-secondary center  ">
        Developer Resources
      </h2>
      <div className="center-col grid col-3">{resourceCard()}</div>
    </div>
  );
};

export default ResourcePage;

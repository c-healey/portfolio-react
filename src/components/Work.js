import React from "react";
import OuterLimits from "../components/OuterLimits";
import WorkCard from "./WorkCard";
import { onClickModal } from "./Modal";

const workDetail = [
  // {
  //   title: "Search Youtube",
  //   description: `Search for your favorite youtube videos or enjoy the 'news'.
  //   This is a  simple React JS app that takes a search term and queries via youtube's JSON api.
  //   `,
  //   gitRepo: "https://github.com/c-healey/videos",
  //   liveSite: "https://c-healey.github.io/videos/",
  //   featured: true,
  //   category: ["React", "JSON"],
  // },
  {
    title: "Comp to React",
    description: "FrontEnd Mentor exercise. React, Hooks, Axios, JSON",
    gitRepo: "https://github.com/c-healey/job-listing",
    liveSite: "https://c-healey.github.io/job-listing/",
    featured: true,
    category: ["Featured", "React", "Hooks", "JSON", "Comp2HTML"],
  },
  {
    title: "Search UnSplash",
    description: "Search for pics on unsplash. React, Axios, JSON",
    gitRepo: "https://github.com/c-healey/pics",
    liveSite: "https://c-healey.github.io/pics/",
    featured: true,
    category: ["Featured", "React", "JSON"],
  },
  {
    title: "Recipes",
    description:
      "Javascript ES6 recipe site that uses an implementation of forktotable.",
    gitRepo: "https://github.com/c-healey/recipes",
    liveSite: "https://c-healey.github.io/recipes/",
    featured: false,
    category: ["Featured", "JavaScript", "JSON", "Comp2HTML"],
  },
  {
    title: "Comp to React",
    description: "FrontEnd Mentor exercise.",
    gitRepo: "https://github.com/c-healey/easybank",
    liveSite: "https://c-healey.github.io/easybank/",
    featured: false,
    category: ["Featured", "React", "Hooks", "JSON", "Comp2HTML"],
  },
  {
    title: "Comp to React",
    description: "FrontEnd Mentor exercise.",
    gitRepo: "https://github.com/c-healey/fylo",
    liveSite: "https://c-healey.github.io/fylo/",
    featured: false,
    category: ["Featured", "React", "Hooks", "JSON", "Comp2HTML"],
  },
  {
    title: "Comp to React",
    description: "FrontEnd Mentor exercise.",
    gitRepo: "https://github.com/c-healey/input-form",
    liveSite: "https://c-healey.github.io/input-form/",
    featured: false,
    category: ["Featured", "React", "Hooks", "JSON", "Comp2HTML"],
  },
  {
    title: "Comp to React",
    description: "FrontEnd Mentor exercise.",
    gitRepo: "https://github.com/c-healey/huddle",
    liveSite: "https://c-healey.github.io/huddle/",
    featured: false,
    category: ["Featured", "React", "Hooks", "JSON", "Comp2HTML"],
  },
  {
    title: "Comp to React",
    description: "FrontEnd Mentor exercise.",
    gitRepo: "https://github.com/c-healey/FM-insure",
    liveSite: "https://c-healey.github.io/FM-insure/",
    featured: false,
    category: ["Featured", "React", "Hooks", "JSON", "Comp2HTML"],
  },

  {
    title: "Comp to React",
    description: "FrontEnd Mentor exercise.",
    gitRepo: "https://github.com/c-healey/FM-tracking-info",
    liveSite: "https://c-healey.github.io/FM-tracking-info/",
    featured: false,
    category: ["Featured", "React", "Hooks", "JSON", "Comp2HTML"],
  },
  {
    title: "Comp to React",
    description: "FrontEnd Mentor exercise.",
    gitRepo: "https://github.com/c-healey/social-media-dash",
    liveSite: "https://c-healey.github.io/social-media-dash/",
    featured: false,
    category: ["Featured", "React", "Hooks", "JSON", "Comp2HTML"],
  },
  {
    title: "Comp to React",
    description: "FrontEnd Mentor exercise.",
    gitRepo: "https://github.com/c-healey/clipboard",
    liveSite: "https://c-healey.github.io/clipboard/",
    featured: false,
    category: ["Featured", "React", "Hooks", "JSON", "Comp2HTML"],
  },
  {
    title: "Comp to React",
    description: "FrontEnd Mentor exercise.",
    gitRepo: "https://github.com/c-healey/simple-price-cards",
    liveSite: "https://c-healey.github.io/simple-price-cards/",
    featured: false,
    category: ["Featured", "React", "Hooks", "JSON", "Comp2HTML"],
  },

  {
    title: "Budget",
    description: "Javascript budget calculator.",
    gitRepo: "https://github.com/c-healey/budget",
    liveSite: "https://c-healey.github.io/budget/",
    featured: false,
    category: ["Featured", "JavaScript", "JSON", "Comp2HTML"],
  },
  {
    title: "Pig Game",
    description: "Javascript implementation of Pig game",
    gitRepo: "https://github.com/c-healey/pig-game",
    liveSite: "https://c-healey.github.io/pig-game/",
    featured: false,
    category: ["Featured", "JavaScript", "JSON", "Comp2HTML"],
  },
  {
    title: "Local Weather",
    description: "Check local weather",
    gitRepo: "https://github.com/c-healey/weather-apps",
    liveSite: "https://c-healey.github.io/weather-app/",
    featured: false,
    category: ["Featured", "JavaScript", "JSON"],
  },
];
// const filters = [
//   "Featured",
//   "JavaScript",
//   "JSON",
//   "React",
//   "Hooks",
//   "Comp2HTML",
// ];

const work = () => {
  const viewAllWork = () => {
    [...document.querySelectorAll(".work-card")].forEach((card) => {
      if (!card.classList.contains("featured")) {
        card.classList.toggle("hide");
      }
    });
    [...document.querySelectorAll(".work-filter")].forEach((filter) => {
      filter.classList.toggle("hide");
    });
    return null;
  };
  return (
    <section
      id="section-work"
      className="section-work grid center center-col-wide"
    >
      <div className="modal">
        <h2>modal window</h2>
        <ul>
          <li>Some list item</li>
          <li>A second list item</li>
        </ul>
        <div className="btn btn--white" onClick={() => onClickModal()}>
          Close
        </div>
      </div>

      <h2 className="heading-secondary full-width work__heading"> Work</h2>
      <div className="grid center col-1 full-width ">
        <OuterLimits />
        <div className="work-filter " onClick={() => viewAllWork()}>
          View All
        </div>
        <div className="work-filter hide" onClick={() => viewAllWork()}>
          Featured
        </div>{" "}
      </div>

      {workDetail.map((detail, idx) => {
        let hide = idx >= 3 ? true : false;
        return <WorkCard key={idx + 1} cardDetail={detail} hide={hide} />;
      })}
    </section>
  );
};
export default work;

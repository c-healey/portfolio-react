import React from "react";
import OuterLimits from "../components/OuterLimits";
import WorkCard from "./WorkCard";

const workDetail = [
  {
    title: "Search Youtube",
    color: "#fff",
    backgroundColor: "orange",
    backgroundImage: "../img/nat-5-small.jpg",
    description: `Search for your favorite youtube videos or enjoy the 'news'.  
    This is a  simple React JS app that takes a search term and queries via youtube's JSON api.
    `,
    gitRepo: "https://github.com/c-healey/videos",
    liveSite: "https://c-healey.github.io/videos/",
    featured: true,
    category: ["React", "JSON"],
  },
  {
    title: "Search UnSplash",
    color: "#fff",
    backgroundColor: "orange",
    backgroundImage: "../img/nat-5-small.jpg",
    description: "Search for pics on unsplash.",
    gitRepo: "https://github.com/c-healey/pics",
    liveSite: "https://c-healey.github.io/pics/",
    featured: true,
    category: ["React", "JSON"],
  },
  {
    title: "Comp to React",
    color: "#fff",
    backgroundColor: "orange",
    backgroundImage: "../img/nat-5-small.jpg",
    description: "Search for pics on unsplash.",
    gitRepo: "https://github.com/c-healey/job-listing",
    liveSite: "https://c-healey.github.io/job-listing/",
    featured: true,
    category: ["React", "Hooks", "JSON"],
  },
];

// {
//   title: "Local Weather",
//   color: "#fff",
//   backgroundColor: "orange",
//   backgroundImage: "../img/nat-5-small.jpg",
//   description: "Check local weather",
//   gitRepo: "https://github.com/c-healey/weather-apps",
//   liveSite: "https://c-healey.github.io/weather-app/",
//   featured: false,
//   category: ["JavaScript", "JSON"],
// },
const work = () => {
  return (
    <section id="section-work" className="section-work">
      <h2 className="heading-secondary work__heading"> Work</h2>
      <div className="outer-limits-container grid center col-3">
        <OuterLimits />
        <div className="work-filter ">Filter</div>
      </div>
      <div className="grid center col-1">
        {workDetail.map((detail, idx) => {
          return <WorkCard keyIdx={idx + 1} cardDetail={detail} />;
        })}
      </div>
    </section>
  );
};
export default work;

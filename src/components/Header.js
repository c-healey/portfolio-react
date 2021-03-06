import React from "react";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <header
      id="section-header"
      className="grid col-1 center full-width section-header"
    >
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src="./img/video.mp4" type="video/mp4" />
          <source src="./img/video.webm" type="video/webm" />
          Your browser is not supported!
        </video>
      </div>

      <h1 className="heading-primary heading-primary--main">Web Development</h1>
      <h1 className="heading-primary heading-primary--sub">
        bring design to life
      </h1>

      <a
        href="mailto:cathy.healey@gmail.com?subject=Get in Touch from portfolio-react"
        target="_blank"
        className="btn btn--white"
      >
        Get In Touch
      </a>
    </header>
  );
};
export default header;

import React from "react";

const header = () => {
  return (
    <header className="section-header">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src="./portfolio-react/img/video.mp4" type="video/mp4" />
          <source src="./portfolio-react/img/video.webm" type="video/webm" />
          Your browser is not supported!
        </video>
      </div>

      <h1 className="heading-primary heading-primary--main">Web Development</h1>
      <h1 className="heading-primary heading-primary--sub">
        bring design to life
      </h1>

      <a href="#" className="btn btn--white btn--animated jself-center">
        Get Started
      </a>
    </header>
  );
};
export default header;

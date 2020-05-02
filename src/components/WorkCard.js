import React from "react";

class WorkCard extends React.Component {
  // {
  //   title: "Local Weather",
  //   color: "#fff",
  //   backgroundColor: "orange",
  //   backgroundImage: "../img/nat-5-small.jpg",
  //   Description: "Check local weather",
  //   gitRepo: "https://github.com/c-healey/weather-apps",
  //   liveSite: "https://c-healey.github.io/weather-app/",
  // },
  render() {
    let detail = this.props.cardDetail;

    let keyIdx = this.props.keyIdx;
    return (
      <div
        className={
          this.props.hide === true ? "work-card hide" : "work-card featured"
        }
        id={`work-card${keyIdx}`}
        key={`work-card${keyIdx}`}
      >
        <span className="work-card__heading-span ">
          <h4 className="work-card__heading">{detail.title}</h4>
        </span>
        <iframe title={`iframe-${keyIdx}`} src={detail.liveSite}></iframe>

        <div className="work-card__details">
          <ul>
            <li>{detail.description}</li>
          </ul>

          <div className="work-card-btn-box grid col-2 center">
            <a className="btn btn--green  " href={detail.liveSite}>
              Live Site
            </a>

            <a className="btn btn--green" href={detail.gitRepo}>
              Code
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default WorkCard;

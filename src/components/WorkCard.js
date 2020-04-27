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
    console.log(this.props);
    let detail = this.props.cardDetail;
    let image = "/portfolio-react/static/media/nat-5-small.00cad672.jpg";
    let keyIdx = this.props.keyIdx;
    return (
      <div className="work-card" id={`work-${keyIdx}`} key={`work-${keyIdx}`}>
        <div className="work-card__side work-card__side--front">
          <span className="work-card__heading-span work-card__heading-span--1">
            <h4 className="work-card__heading">{detail.title}</h4>
          </span>
          <iframe src={detail.liveSite}></iframe>
          {/* <div
            className="work-card__picture work-card__picture"
            style={{
              backgroundImage: `linear-gradient(to right bottom,
              orange,
              yellow), url('${image}')`,
            }}
          ></div> */}
          <div className="work-card__details">
            {detail.description}
            <div className="grid col-2 center">
              <a className="btn-txt  " href={detail.liveSite}>
                Live Site
              </a>

              <a className="btn-txt" href={detail.gitRepo}>
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default WorkCard;

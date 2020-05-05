import React from "react";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <footer id="section-footer" className="full-width container section-footer">
      <h1 className="heading-secondary center full-width">C Healey</h1>

      <div className="grid col-2 left center-col-wide footer__navigation-container">
        <div className=" footer__navigation">
          <ul className="footer__list">
            <li className="footer__item">
              <Link to="/" className="footer__link">
                Home
              </Link>
            </li>
            <li className="footer__item">
              <Link to="/work" className="footer__link">
                Work
              </Link>
            </li>
          </ul>
        </div>
        <p className=" footer__navigation">
          Built by{" "}
          <Link to="/" className="footer__link">
            Catherine Healey
          </Link>
          &nbsp;Copyright &copy; 2019 Design adapted from Jonas Schmedtmann -
          Advanced CSS and Sass.
        </p>
      </div>
      <div className="grid col-3-min left center full-width">
        <a href="https://linkedin.com/in/c-healey">
          <i class="book__call-me fab fa-linkedin"></i>
        </a>
        <a href="https://github.com//c-healey">
          <i class="book__call-me fab fa-github-square"></i>
        </a>

        <a href="https://twitter.com/cfhealey">
          <i class="book__call-me fab fa-twitter-square"></i>
        </a>
      </div>
    </footer>
  );
};
export default footer;

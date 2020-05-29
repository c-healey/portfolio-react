import React from "react";

const contact = () => {
  return (
    <section id="section-book" className="grid center section-book full-width">
      <div className="grid left col-1 book">
        <div className="book__form">
          <h2 className="heading-secondary left full-width">
            Get in Touch now
          </h2>

          <div className="book__call-me heading-tertiary">248-835-8797</div>
          <div className="book__email-me heading-tertiary">
            <a
              href="mailto:cathy.healey@gmail.com?subject=portfolio inquiry"
              target="_blank"
            >
              cathy.healey@gmail.com
            </a>
          </div>
          <div className="grid col-3-min left">
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
        </div>
      </div>
    </section>
  );
};
export default contact;

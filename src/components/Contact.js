import React from "react";

const contact = () => {
  return (
    <section id="section-book" className="section-book">
      <div className="book">
        <div className="book__form">
          <h2 className="heading-secondary book__heading">Get in Touch now</h2>

          <form action="#" className="form">
            <div className="form__group">
              <input
                type="text"
                className="form__input"
                id="name"
                placeholder="Full Name"
                required
              />
              <label htmlFor="name" className="form__label">
                Full Name
              </label>
            </div>
            <div className="form__group">
              <input
                type="email"
                className="form__input"
                id="email"
                placeholder="Email Address"
                required
              />
              <label htmlFor="email" className="form__label">
                Email Address
              </label>
            </div>
            <div className="form__group">
              <div className="form__radio-group">
                <input
                  type="radio"
                  className="form__radio-input"
                  id="small"
                  name="size"
                />
                <label htmlFor="small" className="form__radio-label">
                  <span className="form__radio-button"></span>
                  Manager
                </label>
              </div>
              <div className="form__radio-group">
                <input
                  type="radio"
                  className="form__radio-input"
                  id="large"
                  name="size"
                />
                <label htmlFor="large" className="form__radio-label">
                  <span className="form__radio-button"></span>
                  Recruiter
                </label>
              </div>
            </div>

            <button className="btn btn--green form__btn">
              Next step &rarr;
            </button>
          </form>
          <div className="book__call-me heading-tertiary">248-835-8797</div>
        </div>
      </div>
    </section>
  );
};
export default contact;

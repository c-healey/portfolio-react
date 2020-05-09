import React from "react";
import Header from "../Header";
import About from "../About";
import Attributes from "../Attributes";
import Skills from "../Skills";
import Work from "../Work";
import Contact from "../Contact";

class Home extends React.Component {
  state = { navActive: false };
  toggleNav = () => {
    this.setState({ navActive: !this.state.navActive });
  };
  render() {
    return (
      <div>
        <Header />

        <div className="container">
          <About />
        </div>
        <div className="container">
          <Work />
        </div>
        <div className="container">
          <Attributes />
        </div>
        <div className="container">
          <Skills />
        </div>
        <div className="container">
          <Contact />
        </div>
      </div>
    );
  }
}
export default Home;

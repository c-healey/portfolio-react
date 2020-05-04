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
      <div className="full-width container">
        <Header />
        <About />
        <Work />
        <Attributes />
        <Skills />
        <Contact />
      </div>
    );
  }
}
export default Home;

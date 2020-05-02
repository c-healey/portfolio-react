import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Attributes from "../components/Attributes";
// import Skills from "../components/Skills";
import Work from "../components/Work";
// import Contact from "../components/Contact";
// import Footer from "../components/Footer";
import Nav from "../components/Navigation";

import "../sass/main.scss";

class App extends React.Component {
  state = { navActive: false };
  toggleNav = () => {
    this.setState({ navActive: !this.state.navActive });
  };
  render() {
    return (
      <div className="container">
        <Nav active={this.state.navActive} onClick={this.toggleNav} />
        <Header />
        <About />
        {/* <Work /> */}
        <Attributes />
        {/* <Skills />
        <Contact />
        <Footer /> */}
      </div>
    );
  }
}
export default App;

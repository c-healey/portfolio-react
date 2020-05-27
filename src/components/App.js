import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Home from "./Page/Home";
import PomodoroMoments from "./Page/PomodoroMoments";
import WorkPage from "./Page/WorkPage";
import ResourcePage from "./Page/ResourcePage";

import Footer from "./Footer";
import Nav from "./Navigation";

import "../sass/main.scss";

class App extends React.Component {
  state = { navActive: false };
  toggleNav = () => {
    this.setState({ navActive: !this.state.navActive });
  };
  render() {
    return (
      <div className="base">
        <HashRouter>
          <div>
            <Nav active={this.state.navActive} onClick={this.toggleNav} />

            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/work" component={WorkPage} />
              <Route path="/resources" component={ResourcePage} />
              {/* <Route path="/pomodoro-moments" component={PomodoroMoments} /> */}
            </Switch>
            <Footer />
          </div>
        </HashRouter>
      </div>
    );
  }
}
export default App;

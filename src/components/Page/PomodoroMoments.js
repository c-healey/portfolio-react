import React from "react";

import Covid19 from "../Covid19";

class PomodoroMoments extends React.Component {
  state = { navActive: false };
  toggleNav = () => {
    this.setState({ navActive: !this.state.navActive });
  };
  render() {
    return (
      <div className="full-width container">
        <Covid19 />
      </div>
    );
  }
}
export default PomodoroMoments;

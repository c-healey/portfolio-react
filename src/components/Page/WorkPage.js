import React from "react";

import Work from "../Work";

class WorkPage extends React.Component {
  state = { navActive: false };
  toggleNav = () => {
    this.setState({ navActive: !this.state.navActive });
  };
  render() {
    return (
      <div className="full-width container">
        <Work />
      </div>
    );
  }
}
export default WorkPage;

import React from "react";
import Dashboard from "../Dashboard/index";
import SideData from "./SideData";
import Lay from "../Layout/index";

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      leftOpen: true,
      rightOpen: true,
    };
  }

  toggleSidebar = (event) => {
    let key = `${event.currentTarget.parentNode.id}Open`;
    this.setState({ [key]: !this.state[key] });
  };

  render() {
    let leftOpen = this.state.leftOpen ? "open" : "closed";

    return (
      <div id="layout">
        <div id="left" className={leftOpen}>
          <div className="icon" onClick={this.toggleSidebar}>
            &equiv;
          </div>
          <div className={`sidebar ${leftOpen}`}>
            <SideData />
          </div>
        </div>
        <Lay>
          <div id="main">
            <div className="content1">
              <Dashboard />
            </div>
          </div>
        </Lay>
      </div>
    );
  }
}

export default Layout;

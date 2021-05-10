import React from "react";
import Map from "../Dashboard/Maps";
import SideData from "../SideBar/SideData";
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
              <Map />
            </div>
          </div>
        </Lay>
      </div>
    );
  }
}

export default Layout;

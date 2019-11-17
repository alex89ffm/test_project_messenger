import React, { Component } from "react";
import "./../css/sidebar.css";
import logo from "./../assets/sidebar/logo.png";

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar__item">
          <img src={logo} alt="campoint AG" />
        </div>
      </div>
    );
  }
}

export default Sidebar;

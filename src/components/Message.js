import React, { Component } from "react";
import "./../css/messenger.css";

class message extends Component {
  state = {};
  render() {
    return (
      <div className="messenger__message-list__item">
        <img
          className="messenger__message-list__item__image"
          src={this.getUserImage()}
        ></img>
        <div className="message">{this.props.text}</div>
      </div>
    );
  }
  getUserImage() {
    const Imagename = "./assets/users/" + this.props.userId + ".jpg";
    return Imagename;
  }

  componentDidMount() {
    var req = require.context("../assets/users", false, /.*\.jpg$/);
    req.keys().forEach(function(key) {
      req(key);
    });
    console.log(req);
  }
}

export default message;

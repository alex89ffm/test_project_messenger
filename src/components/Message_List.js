import React, { Component } from "react";
import Message from "./Message.js";
import "./../css/messenger.css";

class MessageList extends Component {
  state = {};
  render() {
    return (
      <div className="messenger__message-list">
        <div className="messenger__message-list__wrapper">
          {this.props.messages.map(m => {
            return (
              <Message
                key={m.id}
                id={m.id}
                userId={m.userID}
                userName={m.username}
                text={m.text}
              ></Message>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MessageList;

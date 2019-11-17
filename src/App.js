import React, { Component } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebar.js";
import MessengerHeader from "./components/Header.js";
import MessengerMembers from "./components/Members.js";
import MessageList from "./components/Message_List.js";
import "./css/messenger.css";
import "./css/reset.css";
import "./css/style.css";

class App extends Component {
  state = {
    messages: [],
    textMessage: ""
  };

  constructor() {
    super();
    console.log("constructor");
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Sidebar />

          <div className="messenger">
            <div className="messenger__frame">
              <MessengerHeader />

              <MessengerMembers />

              <MessageList messages={this.state.messages}></MessageList>

              <div className="messenger__action-bar">
                <div className="messenger__action-bar-wrapper">
                  <input
                    className="messenger__action-bar__input"
                    type="text"
                    title="Message"
                    value={this.state.textMessage}
                    onChange={this.handlChangeTextMessage}
                    onKeyPress={this.handleKeyPress()}
                  />
                  <button
                    className="messenger__action-bar__btn btn btn--primary"
                    type="button"
                    onClick={this.PostMessage}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  getMessages() {
    axios
      .get("http://new.visit-x.net/rest/v1/recruiting/messenger/channel/1234")
      .then(response => {
        // create an array of contacts only with relevant data
        const messages = response.data.data.messages.map(m => {
          return {
            id: m.id,
            sentAt: m.sentAt,
            userID: m.user.id,
            userName: m.user.name,
            text: m.text
          };
        });
        this.setState({ messages });
      })
      .catch(error => console.log(error));
  }

  PostMessage = () => {
    const rootComponent = this;
    const message = this.state.textMessage;
    axios
      .post(
        "https://new.visit-x.net/rest/v1/recruiting/messenger/channel/1234",
        {
          text: message
        }
      )
      .then(function(response) {
        console.log(response);
        rootComponent.getMessages();
      })
      .catch(function(error) {
        console.log(error);
      });
    this.setState({ textMessage: "" });
  };

  handlChangeTextMessage = event => {
    this.setState({ textMessage: event.target.value });
  };

  handleKeyPress = event => {};
  componentDidMount() {
    this.getMessages();
  }
}
export default App;

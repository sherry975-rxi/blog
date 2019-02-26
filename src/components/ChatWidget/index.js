import "react-chat-widget/lib/styles.css";

import React from "react";

import avatar from "../../images/jpg/avatar.jpg";

let chatWidget;

class ChatWidget extends React.Component {
  constructor() {
    super();
    this.state = { showChat: false };
  }

  handleNewUserMessage = newMessage => {
    console.log(`message: ${newMessage}`);
  };

  render() {
    return (
      this.state.showChat && (
        <React.Fragment>
          <chatWidget.Widget
            title="Hi there 👋🏽"
            subtitle="What can I help you with today?"
            profileAvatar={avatar}
            handleNewUserMessage={this.handleNewUserMessage}
          />
          <style jsx>
            {`
              :global(.rcw-launcher) {
                background-color: #709425;
              }

              :global(.rcw-conversation-container > .rcw-header) {
                background-color: #709425;
              }
            `}
          </style>
        </React.Fragment>
      )
    );
  }

  componentDidMount() {
    chatWidget = require("react-chat-widget");
    this.setState({ showChat: true });
    chatWidget.addResponseMessage("Hi 👋🏽");
    chatWidget.addResponseMessage("What can I help you with today?");
  }
}

export default ChatWidget;

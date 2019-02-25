import React from "react";

import avatar from "../../images/jpg/avatar.jpg";

import "react-chat-widget/lib/styles.css";

let chatWidget;

class ChatWidget extends React.Component {
  constructor() {
    super();
    this.state = {
      showChat: false
    };
  }

  render() {
    return (
      this.state.showChat && (
        <React.Fragment>
          <chatWidget.Widget
            title="Hi there 👋🏽"
            subtitle="What can I help you with today?"
            profileAvatar={avatar}
          />
        </React.Fragment>
      )
    );
  }

  componentDidMount() {
    chatWidget = require("react-chat-widget");
    this.setState({ showChat: true });
  }
}

export default ChatWidget;

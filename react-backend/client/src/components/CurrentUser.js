import React, { Component } from 'react';

class CurrentUser extends Component {

  render() {
    return (
      <div>User {this.props.currentUser === "user1" ? "1" : "2"}</div>
    );
  }
}

export default CurrentUser;

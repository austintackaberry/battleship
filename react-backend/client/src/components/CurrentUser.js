import React, { Component } from 'react';

class CurrentUser extends Component {

  render() {
    if (this.props.winner !== null) {
      return <h2>User {this.props.winner === "user1" ? "1" : "2"} is the winner!</h2>
    }
    return (
      <h3>User {this.props.currentUser === "user1" ? "1" : "2"}'s turn</h3>
    );
  }
}

export default CurrentUser;

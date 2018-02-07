import React, { Component } from 'react';

class Square extends Component {

  render() {
    return <span className={this.props.elClass}></span>
  }
}

export default Square;

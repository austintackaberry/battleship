import React, { Component } from 'react';

class ShotGridSquare extends Component {

  render() {
    return <span className={this.props.elClass} onClick={() => this.props.onShot(this.props.colIndex)}></span>
  }
}

export default ShotGridSquare;

import React, { Component } from 'react';
import Square from './Square.js'

class Row extends Component {

  render() {
    return (
      <div className="row">
        {this.props.row.map((element) => {
            const elClass = element.ship ? "ship" : "empty";
            return (
              <Square
                elClass={elClass}
              />
            )
          })}
      </div>
    );
    return <div></div>
  }
}

export default Row;

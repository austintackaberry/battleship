import React, { Component } from 'react';
import Square from './Square.js'

class Row extends Component {

  render() {
    return (
      <div className="row">
        {this.props.row.map((element) => {
            let elClass;
            if (!element.ship) {
              elClass = 'empty';
            }
            else if (element.ship.hit) {
              elClass = 'hit';
            }
            else {
              elClass = 'ship';
            }
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

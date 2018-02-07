import React, { Component } from 'react';
import ShotGridSquare from './ShotGridSquare.js'

class ShotGridRow extends Component {

  render() {
    return (
      <div className="row">
        {this.props.row.map((element, colIndex) => {
          let elClass;
          if (!element.shot) {
            elClass = 'empty';
          }
          else if (element.shot.hit) {
            elClass = 'hit';
          }
          else {
            elClass = 'miss';
          }
          return (
            <ShotGridSquare
              elClass={elClass}
              colIndex={colIndex}
              onShot={(colIndex) => this.props.onShot(this.props.rowIndex, colIndex)}
            />
          )
        })}
      </div>
    );
    return <div></div>
  }
}

export default ShotGridRow;

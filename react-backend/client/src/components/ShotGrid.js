import React, { Component } from 'react';
import ShotGridRow from './ShotGridRow.js'

class ShotGrid extends Component {

  render() {
    const shotGrid = this.props.shotGrid;
    if (shotGrid === null) {return <div></div>}
    return (
      <div>
        <h3>Click on a square to take a shot!</h3>
        {shotGrid.map((row, rowIndex) => {
          return (
            <ShotGridRow
              row={row}
              rowIndex={rowIndex}
              onShot={(rowIndex, colIndex) => this.props.onShot(rowIndex, colIndex)}
            />
          );
        })}
      </div>
    );
    return <div></div>
  }
}

export default ShotGrid;

import React, { Component } from 'react';
import Row from './Row.js'

class ShipGrid extends Component {

  render() {
    const shipGrid = this.props.shipGrid;
    if (shipGrid === null) {return <div></div>}
    return (
      <div>
        <h3>Your randomly generated board</h3>
        {shipGrid.map((row) => {
          return (
            <Row
              row={row}
            />
          );
        })}
      </div>
    );
    return <div></div>
  }
}

export default ShipGrid;

import React, { Component } from 'react';
import CurrentUser from './components/CurrentUser.js'
import ShipGrid from './components/ShipGrid.js'
import ShotGrid from './components/ShotGrid.js'
import './App.css';
import "babel-polyfill";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './actions/actionCreators.js';

export class App extends Component {

  componentWillMount() {
    this.props.initializeShipGrid();
    this.props.initializeShotGrid();
    this.props.randomlyGenerateShipLocations(this.props.shipsLeft);
  }

  componentDidUpdate() {
    this.props.checkForWinner(this.props.shipGrid);
  }

  render() {
    return (
      <div className="App">
        <h1>Battleship</h1>
        <CurrentUser
          currentUser={this.props.currentUser}
          winner={this.props.winner}
        />
        <ShipGrid
          shipGrid={this.props.shipGrid[this.props.currentUser]}
        />
        <ShotGrid
          shotGrid={this.props.shotGrid[this.props.currentUser]}
          onShot={(rowIndex, colIndex) => this.props.onShot(rowIndex, colIndex, this.props.currentUser, this.props.shipGrid, this.props.shotGrid)}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    shipGrid: state.shipGrid,
    shotGrid: state.shotGrid,
    currentUser: state.currentUser,
    shipsLeft: state.shipsLeft,
    winner: state.winner,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

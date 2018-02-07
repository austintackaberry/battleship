import React, { Component } from 'react';
import CurrentUser from './components/CurrentUser.js'
import Instructions from './components/Instructions.js'
import ShipGrid from './components/ShipGrid.js'
import ShotGrid from './components/ShotGrid.js'
import './App.css';
import "babel-polyfill";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './actions/actionCreators.js';

export class App extends Component {

  componentDidMount() {
    this.props.initializeShipGrid(this.props.shipsLeft);
    this.props.initializeShotGrid();
    this.props.initializeShipsLeft();
    this.props.randomlyGenerateShipLocations();
  }

  render() {
    return (
      <div className="App">
        <h1>Battleship</h1>
        <CurrentUser
          currentUser={this.props.currentUser}
        />
        <Instructions />
        <ShipGrid
          shipGrid={this.props.shipGrid[this.props.currentUser]}
        />
        <ShotGrid />
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
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

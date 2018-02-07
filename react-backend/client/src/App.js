import React, { Component } from 'react';
import logo from './logo.svg';
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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
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

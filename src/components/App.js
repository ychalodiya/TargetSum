/* eslint-disable indent */
import React, { Component } from 'react';

import Game from './Game';

export default class App extends Component {
  state = {
    gameID: 1
  }

  resetGame = () => {
    this.setState((prevState) => {
      return {gameID: prevState.gameID+1};
    });
  }

  render() {
    return (
        <Game key={this.state.gameID} onPlayAgain = {this.resetGame} randomNumberCount = {6} timer = "20"/>
        );
    // eslint-disable-next-line indent
    }
}

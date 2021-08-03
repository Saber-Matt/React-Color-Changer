/* eslint-disable max-len */
import React, { Component } from 'react';
import ColorDisplay from '../color-picker/ColorDisplay';


const colors = ['red', 'yellow', 'blue', 'orange', 'teal', 'pink'];
const colorSwitch = colors[Math.floor(Math.random() * colors.length)];

class ColorShuffle extends Component {

state = {
  time: '',
  color: colorSwitch,
}

  componentDidMount = () => {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  };
  componentDismount = () => {
    clearInterval(this.interval());
  };

  render() {
    const { color } = this.state;
    return (
      <>

        <ColorDisplay backgroundColor = { color }/>
      </>
    );
  }
}

export default ColorShuffle;
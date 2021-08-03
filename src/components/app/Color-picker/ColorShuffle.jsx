/* eslint-disable max-len */
import React, { Component } from 'react';
import ColorRender from './ColorRender';


class ColorShuffle extends Component {
  
  state = {
    color: ''
  }
  
  componentDidMount(){
    const colors = ['red', 'yellow', 'blue', 'orange', 'teal', 'pink'];
    setInterval(() => {
      const colorSwitch = colors[Math.floor(Math.random() * colors.length)];
      this.setState({ color: colorSwitch });
    }, 1000);
  }

  render(){
    const { color } = this.state;
    console.log(color);
    return (
      <ColorRender backgroundColor = {color}/>
    );
  }
}

export default ColorShuffle;

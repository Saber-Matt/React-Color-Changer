/* eslint-disable max-len */
import React from 'react';
import { ReactDOM } from 'react';
import Color from 'color';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      colorsNum: 5,
      colors: []
    };
    for(let i = 0; i < this.state.colorsNum; i += 1)
    {
      this.state.colors.push({ hexCode: this.generateColor() });
    }
  }
  generateColor(){
    return '#' + Math.random().toString(16).substr(-6);
  }
  updateColor(index) {
    const colors = this.state.colors.slice();
    const currentColor = this.generateColor(); colors[index].hexCode = currentColor;
    this.setState({ colors });
  }
  render() {
    return (
      <div className="color-container">
        { this.state.colors.map((color, index) =>
        
          <Color key={`color-${index}`} index={index} update={this.updateColor.bind(this)} hexCode={color.hexCode}>
          </Color>) }
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));


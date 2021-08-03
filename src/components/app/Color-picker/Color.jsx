import React, { Component } from 'react';
import ColorRender from './ColorRender';

export default class Color extends Component {
    state = {
        selectedColor: 'red',
    };

    handleColorChange = (color) => {
        this.setState({ selectedColor: color });
    };

    render() {
        const colors = ['red', 'yellow','blue' , 'orange', 'teal', 'pink'];
        const { selectedColor } = this.state;
    }

    return( <ColorRender backgroundColor={selectedColor} /> );

}
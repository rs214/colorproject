import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { Link } from 'react-router-dom';

export default class PaletteList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let palettesNames = this.props.palettes.map((palette) => {
      return (
        <MiniPalette {...palette}/>
      )})
    return (
      <div>
        <h1>PaletteList</h1>
          {palettesNames}
      </div>
    );
  }
}

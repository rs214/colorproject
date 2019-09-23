import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PaletteList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let palettesNames = this.props.palettes.map((palette) => {
      return (
        <p>
          <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>;
        </p>
      )})
    return (
      <div>{palettesNames}</div>
    );
  }
}

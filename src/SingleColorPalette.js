import React, { Component } from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import PaletteFooter from './PaletteFooter';

export default class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.collectShades(this.props.palette, this.props.colorId);
    this.state = { format: "hex" };
    this.changeFormat = this.changeFormat.bind(this);
  }

  collectShades(palette, colorFilter) {
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorFilter)
      );
    }
    return shades.slice(1);
    //collect shades of a given color
  }

  changeFormat(val) {
    this.setState({format: val});
  }

  render() {
    const { format } = this.state;
    const { emoji, paletteName } = this.props.palette;
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.id}
        name={color.name}
        background={color[format]}
        showLink={false}
      />
    ));
    return (
      <div className="Palette">
        <NavBar handleChange={this.changeFormat} showColors={false} />
        <div className="Palette-colors">{colorBoxes}</div>
        <PaletteFooter
          paletteName = {paletteName}
          emoji = {emoji}
        />
      </div>
    );
  }
}



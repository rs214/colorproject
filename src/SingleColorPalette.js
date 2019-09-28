import React, { Component } from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import PaletteFooter from './PaletteFooter';
import { Link } from 'react-router-dom';

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
    const { emoji, paletteName, id } = this.props.palette;
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showLink={false}
      />
    ));
    return (
      <div className="SingleColorPalette Palette">
        <NavBar handleChange={this.changeFormat} showColors={false} />
        <div className="Palette-colors">
          {colorBoxes}
          <div className="go-back ColorBox">
            <Link to={`/palette/${id}`} className="back-button">GO BACK</Link>
          </div>
        </div>
        <PaletteFooter
          paletteName={paletteName}
          emoji={emoji}
        />
      </div>
    );
  }
}



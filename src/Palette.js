import React, {Component} from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import PaletteFooter from './PaletteFooter';
import './Palette.css';



export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {level: 500, format: "hex"}
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeLevel(newLevel) {
    this.setState({level: newLevel})
  }

  changeFormat(val) {
    this.setState({format: val});
  }

  render() {
    const {colors, paletteName, emoji, id} = this.props.palette;
    const {level, format} = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color[format]} name={color.name} key={color.id} id={color.id} paletteId={id} showLink />
    ));
    return (
      <div className="Palette">
      <NavBar
        changeLevel = {this.changeLevel}
        level = {this.state.level}
        handleChange = {this.changeFormat}
        showColors = {true}
      />
        <div className='Palette-colors'>
          {colorBoxes}
        </div>
        <PaletteFooter
          emoji = {emoji}
          paletteName = {paletteName}
        />
      </div>
    );
  }
}

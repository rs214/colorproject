import React, {Component} from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
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
    const colorBoxes = this.props.palette.colors[this.state.level].map(color => (
      <ColorBox background={color[this.state.format]} name={color.name} />
    ))
    return (
      <div className="Palette">
      <NavBar
        changeLevel = {this.changeLevel}
        level={this.state.level}
        handleChange={this.changeFormat}
      />
        <div className='Palette-colors'>
          {colorBoxes}
        </div>
      </div>
    );
  }
}

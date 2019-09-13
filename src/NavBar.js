import React, {Component} from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './NavBar.css';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {format: "hex"};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({format: e.target.value});
    this.props.handleChange(e.target.value);
  }

  render() {
    const {level, changeLevel} = this.props;
    return (
      <header className = "NavBar">
        <div className = "logo">
          <a href="#">React Color Picker</a>
        </div>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
          <div className="select-container">
            <Select onChange={this.handleChange} value = {this.state.format}>
              <MenuItem value="hex">HEX - #ffffff</MenuItem>
              <MenuItem value="rgb">RGB - rgb[255,255,255]</MenuItem>
              <MenuItem value="rgba">RGBA - rgba[255,255,255, 1.0]</MenuItem>
            </Select>
          </div>
      </header>
    );
  }
}

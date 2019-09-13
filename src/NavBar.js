import React, {Component} from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './NavBar.css';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
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
      </header>
    );
  }
}

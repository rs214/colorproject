import React, {Component} from 'react';
import ColorBox from './ColorBox';
import './Palette.css';


export default class Palette extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const colorBoxes = this.props.colors.map(color => (
      <ColorBox background={color.color} name={color.name} />
    ))
    return (
      <div className='Palette'>
        <div className='Palette-colors'>
          {colorBoxes}
        </div>
      </div>
    );
  }
}

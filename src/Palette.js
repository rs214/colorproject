import React, {Component} from 'react';
import ColorBox from './ColorBox';
import './Palette.css';


export default class Palette extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.palette.colors)
    const colorBoxes = this.props.palette.colors[300].map(color => (
      <ColorBox background={color.hex} name={color.name} />
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

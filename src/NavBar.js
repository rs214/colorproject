import React, {Component} from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from 'rc-slider';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import 'rc-slider/assets/index.css';
import './NavBar.css';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {format: "hex", open: false};
    this.handleChange = this.handleChange.bind(this);
    this.closeSnackBar = this.closeSnackBar.bind(this);
  }

  handleChange(e) {
    this.setState({format: e.target.value, open: true});
    this.props.handleChange(e.target.value);
  }

  closeSnackBar() {
    this.setState({open: false})
  }

  render() {
    const {level, changeLevel, showColors} = this.props;
    return (
      <header className = "NavBar">
        <div className = "logo">
          <a href="/">React Color Picker</a>
        </div>
          {showColors && (<div className="slider-container">
            <div className="slider">
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onAfterChange={changeLevel}
              />
            </div>
          </div>
          )}
          <div className="select-container">
            <Select onChange={this.handleChange} value = {this.state.format}>
              <MenuItem value="hex">HEX - #ffffff</MenuItem>
              <MenuItem value="rgb">RGB - rgb[255,255,255]</MenuItem>
              <MenuItem value="rgba">RGBA - rgba[255,255,255, 1.0]</MenuItem>
            </Select>
          </div>
          <Snackbar
            anchorOrigin={{vertical: "bottom", horizontal: "left"}}
            open={this.state.open}
            autoHideDuration={3000}
            message={<span id="message-id">Format Changed to {this.state.format.toUpperCase()}!</span>}
            ContentProps={{
              "aria-describedby": "message-id"
            }}
            onClose={this.closeSnackBar}
            action={[
              <IconButton
                onClick={this.closeSnackBar}
                color="inherit"
                key="close"
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            ]}
          />
      </header>
    );
  }
}

import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { withStyles } from '@material-ui/styles';
import chroma from 'chroma-js';
import './ColorBox.css';

const styles = {
  copyText: {
    color: props => chroma(props.background).luminance() >= 0.7 ? "black":"white"
  },
  colorName: {
    color: props => chroma(props.background).luminance() <= .08 ? "white" : "black"
  },
  seeMore: {
    color: props => chroma(props.background).luminance() >= 0.7 ? "black":"white",
    background: "rgba(255,255,255,0.3)",
    position: "absolute",
    border: "none",
    right: "0px",
    bottom: "0px",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase"
  }
}


class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {copied: false};
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({copied: true}, () => {
      setTimeout(() => this.setState({copied: false}), 1500)
    });
  }

  render() {
    const {name, background, paletteId, id, showLink, classes} = this.props;
    const isDark = chroma(background).luminance() <= .08;
    const isLight = chroma(background).luminance() >= .5;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
      <div style={{ background }} className="ColorBox">
        <div className={`copy-overlay ${this.state.copied ? "show" : ""}`} style={{background}}></div>
        <div className={`copy-message ${this.state.copied ? "show" : ""}`}>
          <h1>Copied!</h1>
          <p className={classes.copyText}>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span className={classes.colorName}>{name}</span>
          </div>
          <button className={`copy-button ${isLight && "dark-text"}`}>Copy</button>
        </div>
      {showLink && (
        <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
          <span className={classes.seeMore}>More</span>
        </Link>
      )}
      </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);

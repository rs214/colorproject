import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import chroma from 'chroma-js';
import './ColorBox.css';

export default class ColorBox extends Component {
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
    const {name, background, paletteId, id, showLink} = this.props;
    const isDark = chroma(background).luminance() <= .08;
    const isLight = chroma(background).luminance() >= .5;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
      <div style={{ background }} className="ColorBox">
        <div className={`copy-overlay ${this.state.copied ? "show" : ""}`} style={{background}}></div>
        <div className={`copy-message ${this.state.copied ? "show" : ""}`}>
          <h1>Copied!</h1>
          <p className={isLight && "dark-text"}>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span className={isDark && "light-text"}>{name}</span>
          </div>
          <button className={`copy-button ${isLight && "dark-text"}`}>Copy</button>
        </div>
      {showLink && (
        <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
          <span className={`see-more ${isLight && "dark-text"}`}>More</span>
        </Link>
      )}
      </div>
      </CopyToClipboard>
    );
  }
}


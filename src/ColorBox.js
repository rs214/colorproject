import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
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
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
      <div style={{ background }} className="ColorBox">
        <div className={`copy-overlay ${this.state.copied ? "show" : ""}`} style={{background}}></div>
        <div className={`copy-message ${this.state.copied ? "show" : ""}`}>
          <h1>Copied!</h1>
          <p>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
      {showLink && (
        <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
          <span className="see-more">More</span>
        </Link>
      )}
      </div>
      </CopyToClipboard>
    );
  }
}


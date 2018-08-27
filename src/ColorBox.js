import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    console.log(this.props.opacity);
    const myValue = this.props.opacity
    return (
        <div className="color-box" style={{opacity: myValue}}>
          {((this.props.opacity >=0.2) ? <ColorBox opacity={myValue - 0.1}/> : null)}
        </div>
      )
    }
  }

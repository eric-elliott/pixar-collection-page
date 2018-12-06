import React, { Component } from 'react';
import { Parallax } from 'react-parallax';

class ParallaxWrapper extends Component {
    render() {
        return(
            <Parallax bgImage={this.props.image} strength={375}>
            <div style={imageStyles}>
              <div style={insideStyles}>{this.props.mainName}</div>
            </div>
          </Parallax>
        );
    }
}

//defining styles to applied to the image/text
const insideStyles = {
    color: "white",
    fontFamily: 'Open Sans',
    fontSize: '75pt',
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  };
  
  const imageStyles = { height: 600, width: "100%" };

export default ParallaxWrapper;
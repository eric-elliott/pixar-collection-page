import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css'

class Banner extends Component {
    render() {
        return(
            <div className="banner">
            <img src= {require("./img/pixar-logo.png")} alt='' className="pixar-logo" />
            <Button onClick={this.props.button1} bsStyle="link" className="button1">All Films</Button>
            <Button onClick={this.props.button2} bsStyle="link" className="button1">Feature Films</Button>
            <Button onClick={this.props.button3} bsStyle="link" className="button1">Short Films</Button>
            <small className = "sort"> sort by: </small>
            <Button onClick={this.props.button5} bsStyle="link" className="button2" style={this.props.highlight1}>Latest</Button>
            <Button onClick={this.props.button6} bsStyle="link" className="button2" style={this.props.highlight2}>Oldest</Button>
            <Button onClick={this.props.button7} bsStyle="link" className="button2" style={this.props.highlight3}>A-Z</Button>
            <Button onClick={this.props.button8} bsStyle="link" className="button2" style={this.props.highlight4}>Z-A</Button>
            <div className="desc"> ~a sorted collection of pixar's films~ </div>
            <img src= {require("./img/luxo-ball.png")} alt='' className="luxo" />
          </div>
        );
    }
}

export default Banner;
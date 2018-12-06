import React, { Component } from 'react';
import './FilmItem.css'

class FilmItem extends Component {
    render() {
        return <div className="items">
            <a href={this.props.link} target="_blank" rel="noopener noreferrer">
              <img className="poster" src={this.props.poster} type={this.props.type} alt="" />
            </a>
            <div className="title">
              <b>{this.props.title}</b>, {this.props.type}
            </div>
            <div className="release">{this.props.release}</div>
          </div>;
    }
}

export default FilmItem;
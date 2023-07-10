import React, { Component } from "react";

export class Cards extends Component {
  render() {
    return (
      <div>
        <div className="banner__header">{this.props.header}</div>
        <div className="banner">
          <a href="#!" className="banner__link"></a>
          {this.props.img.map((el) => (
            <img src={el} className="banner__img" />
          ))}
          <div className="banner__body">
            <div className="banner__text">
              <div className="banner__title">{this.props.title}</div>
              <div className="banner__muted">{this.props.subtitle}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;

import React, { Component } from "react";

export class CardsSofaBlack extends Component {
  render() {
    return (
      <div>
        <div className="card__header"></div>
        <div className="card">
          <a href="#!" className="card__link"></a>
          <img
            className="card__img"
            src="./img/Black-Velvet-Sofa.jpg"
            alt="Card04"
          />
          <img
            className="card__img"
            src="./img/Black-Velvet-Sofa-b.jpg"
            alt="Card05"
          />
          <img
            className="card__img"
            src="./img/Black-Velvet-Sofa-x.jpg"
            alt="Card06"
          />
          <div className="card__body">
            <div className="card__text">
              <div className="card__title">Black Velor Sofa</div>
              <div className="card__muted">Coming Soon</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardsSofaBlack;

import React, { Component } from "react";

export class CardsArmchair extends Component {
  render() {
    return (
      <div>
        <div className="card__header">COMING SOON</div>
        <div className="card">
          <a href="#!" className="card__link"></a>
          <img
            className="card__img"
            src="./img/white-armchair.jpeg"
            alt="Card01"
          />
          <img
            className="card__img"
            src="./img/white-armchair-r.jpeg"
            alt="Card02"
          />
          <img
            className="card__img"
            src="./img/white-armchair-b.jpeg"
            alt="Card03"
          />
          <div className="card__body">
            <div className="card__text">
              <div className="card__title">White Leather Armchair</div>
              <div className="card__muted">Coming Soon</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardsArmchair;

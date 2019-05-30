import React, { Component } from "react";
import "./Card.css";
import { randomNumber } from "./helpers";
import { AnimateKeyframes } from "react-simple-animate";

class Card extends Component {
  constructor(props) {
    super(props);
    this._translateX = `${randomNumber(-90, 40, 1)}px`;
    this._translateY = `${randomNumber(-40, 40, 1)}px`;
    this._rotation = `${randomNumber(-180, 180, 1)}deg`;
    this._style = {
      transform: `translate(${this._translateX},${this._translateY} ) rotate(${
        this._rotation
      })`
    };
  }

  render() {
    return (
      <AnimateKeyframes
        play={true}
        duration={0.6}
        easeType="cubic-bezier(0.25, 0.46, 0.45, 0.94)"
        keyframes={[
          `transform: translateZ(700px) translateY(300px)`,
          `transform: translateZ(0) translateY(${this._translateY}px)`
        ]}
      >
        <figure className="Card" style={{ ...this._style }}>
          <img src={this.props.src} alt={this.props.alt} />
        </figure>
      </AnimateKeyframes>
    );
  }
}

export default Card;

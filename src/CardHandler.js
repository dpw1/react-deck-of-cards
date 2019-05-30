import React, { Component } from "react";
import Card from "./Card";
import axios from "axios";
import "./CardHandler.css";

const API_URL = "https://deckofcardsapi.com/api/deck/new/shuffle/";

export default class CardHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      drawnCards: []
    };
    this.drawNewCard = this.drawNewCard.bind(this);
  }

  async componentDidMount() {
    const data = await axios.get(API_URL).then(({ data }) => data);

    const cards = await axios
      .get(`https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=52`)
      .then(e => e.data.cards);

    this.setState({ cards });
  }

  drawNewCard() {
    return this.setState(prevState => ({
      drawnCards: [
        ...prevState.drawnCards,
        prevState.cards[prevState.cards.length - 1]
      ],
      cards: [...prevState.cards.slice(0, -1)]
    }));
  }

  render() {
    const cards = this.state.drawnCards.map((e, i) => (
      <Card key={i} src={e.image} />
    ));
    const buttonText = () => {
      if (this.state.drawnCards.length > 51) return "Finished!";
      if (this.state.cards.length <= 0) return "Loading...";
      else if (this.state.cards.length > 0)
        return `${this.state.cards.length} cards left!`;
    };
    return (
      <div className="CardHandler">
        <h1 className="CardHandler-title">Card handler</h1>
        <h2 className="CardHandler-subtitle">Draw the cards!</h2>
        <button
          className="CardHandler-btn"
          onClick={this.drawNewCard}
          disabled={this.state.cards.length <= 0}
        >
          {buttonText()}
        </button>

        <div className="CardHandler-deck">{cards}</div>
      </div>
    );
  }
}

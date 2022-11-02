import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getGenres } from "../services/genreService";
import { getGame, saveGame } from "../services/gameService";

class GameForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genres: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .min(0)
      .max(100)
      .required()
      .label("Number In Stock"),
    dailyRentalRate: Joi.number()
      .min(0)
      .max(10)
      .required()
      .label("Daily Rental Rate"),
  };

  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });

    const gameId = this.props.match.params.id;
    if (gameId === "new") return;
    const game = getGame(gameId);

    if (!game) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(game) });
  }

  mapToViewModel(game) {
    return {
      _id: game._id,
      title: game.title,
      genreId: game.genre._id,
      numberInStock: game.numberInStock,
      dailyRentalRate: game.dailyRentalRate,
    };
  }

  doSubmit = () => {
    saveGame(this.state.data);

    this.props.history.push("/games");
  };

  render() {
    return (
      <div>
        <h1> Game Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "Number in Stock")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default GameForm;

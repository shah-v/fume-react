import React, { Component } from "react";
import { Link } from "react-router-dom";

const GameList = ({ game }) => {
  return (
    <span>
      <td>
        <Link to={`/games/${game._id}`}>{game.title}</Link>
      </td>
      <td>{game.genre.name}</td>
      <td>{game.numberInStock}</td>
      <td>{game.dailyRentalRate}</td>
    </span>
  );
};

export default GameList;

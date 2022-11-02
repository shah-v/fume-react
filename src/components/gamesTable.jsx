import React, { Component } from "react";
import Like from "./common/like";
import Table from "./common/table";
import { Link } from "react-router-dom";

class GamesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: (game) => <Link to={`/games/${game._id}`}>{game.title}</Link>,
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (game) => (
        <Like liked={game.liked} onClick={() => this.props.onLike(game)} />
      ),
    },
    {
      key: "delete",
      content: (game) => (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDelete(game._id)}
        >
          Delete
        </button>
      ),
    },
  ];
  c;
  render() {
    const { games, sortColumn, onSort } = this.props;
    return (
      <Table
        columns={this.columns}
        data={games}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}
export default GamesTable;

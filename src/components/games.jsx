import React, { Component } from "react";
import Page from "./common/pages";
import ListGroup from "./common/listGroup";
import SearchBar from "./common/searchBar";
import { paginate } from "../utils/paginate";
import { getGames } from "../services/gameService";
import { getGenres } from "../services/genreService";
import { Link } from "react-router-dom";
import GamesTable from "./gamesTable";

import _ from "lodash";
class Games extends Component {
  state = {
    games: [],
    genres: [],
    pageSize: 4,
    searchQuery: "",
    selectedGenre: null,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ games: getGames(), genres });
  }

  handleDelete = (gameID) => {
    const games = this.state.games.filter((m) => m._id !== gameID);
    this.setState({ games });
  };

  handleLike = (game) => {
    const games = [...this.state.games];
    const index = games.indexOf(game);
    games[index] = { ...games[index] };
    games[index].liked = !games[index].liked;
    this.setState({ games });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };

  handleChange = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getGameCount = (filtered) => {
    if (filtered.length === 0) {
      return `There are no games in the database.`;
    }
    return `Showing ${filtered.length} games in the database`;
  };

  getPageData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
      searchQuery,
      games: allGames,
    } = this.state;

    let filtered = allGames;
    if (searchQuery)
      filtered = allGames.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filtered = allGames.filter((m) => m.genre._id === selectedGenre._id);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const games = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: games };
  };

  render() {
    const { pageSize, currentPage, sortColumn } = this.state;

    const { totalCount, data: games } = this.getPageData();

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            selectedItem={this.state.selectedGenre}
            items={this.state.genres}
            onItemSelect={this.handleGenreSelect}
          />
        </div>

        <div className="col">
          <Link to="/games/new" className="row btn btn-primary mb-3 mt-3">
            New Game
          </Link>
          <span className="row mb-3">{this.getGameCount(totalCount)}</span>
          <SearchBar onChange={this.handleChange} />

          <GamesTable
            sortColumn={sortColumn}
            games={games}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            onSort={this.handleSort}
          />
          <Page
            itemsCount={totalCount}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Games;

import * as genresAPI from "./genreService";

const games = [
  {
    _id: "1a",
    title: "Cyberpunk 2077",
    genre: { _id: "1", name: "Cyberpunk" },
    numberInStock: 100,
    dailyRentalRate: 9.5,
    liked: true,
  },
  {
    _id: "2a",
    title: "Stardew Valley",
    genre: { _id: "2", name: "Indie" },
    numberInStock: 30,
    dailyRentalRate: 2.5,
  },
  {
    _id: "3a",
    title: "The Witcher",
    genre: { _id: "3", name: "RPG" },
    numberInStock: 8,
    dailyRentalRate: 8.5,
  },
  {
    _id: "4a",
    title: "HOLLOW KNIGHT",
    genre: { _id: "2", name: "Indie" },
    numberInStock: 10,
    dailyRentalRate: 7.5,
  },
  {
    _id: "5a",
    title: "Age Of Empires 2",
    genre: { _id: "4", name: "Strategy" },
    numberInStock: 30,
    dailyRentalRate: 9.0,
  },
  {
    _id: "6a",
    title: "Rim World - BIOTECH",
    genre: { _id: "2", name: "Indie" },
    numberInStock: 6,
    dailyRentalRate: 4.5,
  },
  {
    _id: "7a",
    title: "Terraria",
    genre: { _id: "2", name: "Indie" },
    numberInStock: 33,
    dailyRentalRate: 6.5,
  },
  {
    _id: "8a",
    title: "Stray",
    genre: { _id: "2", name: "Indie" },
    numberInStock: 15,
    dailyRentalRate: 7.5,
  },
  {
    _id: "9a",
    title: "Soul Harvest",
    genre: { _id: "2", name: "Indie" },
    numberInStock: 60,
    dailyRentalRate: 1.5,
  },
];

export function getGames() {
  return games;
}

export function getGame(id) {
  return games.find((m) => m._id === id);
}

export function saveGame(game) {
  let gameInDb = games.find((m) => m._id === game._id) || {};
  gameInDb.title = game.title;
  gameInDb.genre = genresAPI.genres.find((g) => g._id === game.genreId);
  gameInDb.numberInStock = game.numberInStock;
  gameInDb.dailyRentalRate = game.dailyRentalRate;

  if (!gameInDb._id) {
    gameInDb._id = Date.now().toString();
    games.push(gameInDb);
  }

  return gameInDb;
}

export function deleteGame(id) {
  let gameInDb = games.find((m) => m._id === id);
  games.splice(games.indexOf(gameInDb), 1);
  return gameInDb;
}

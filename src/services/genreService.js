export const genres = [
  { _id: "1", name: "Cyberpunk" },
  { _id: "2", name: "Indie" },
  { _id: "3", name: "RPG" },
  { _id: "4", name: "Strategy" },
];

export function getGenres() {
  return genres.filter((g) => g);
}

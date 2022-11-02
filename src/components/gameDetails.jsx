import React from "react";

const GameDetails = ({ match, history }) => {
  return (
    <div>
      <h1>Game Form {match.params.id}</h1>
      <button className="btn-primary" onClick={() => history.push("/games")}>
        Save
      </button>
    </div>
  );
};

export default GameDetails;

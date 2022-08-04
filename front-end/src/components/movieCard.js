import React from "react";

export default function MovieCard({ movie }) {
  return (
    <div className="card-container">
      <h5 className="card-title">{movie.title}</h5>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt="movie poster"
      />
      <button className="add-btn">Add to list</button>
    </div>
  );
}

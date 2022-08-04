import React from "react";

import MovieCard from "../components/movieCard";
import NavBar from "../components/navBar";
export default function Movies({ handleChange, handleSubmit, searchResult }) {
  return (
    <>
      <NavBar handleChange={handleChange} handleSubmit={handleSubmit} />
      <main className="app-container">
        <div className="movies-container">
          {searchResult.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      </main>
    </>
  );
}

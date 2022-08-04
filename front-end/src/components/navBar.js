import React from "react";
import SearchBar from "./searchBar";
export default function NavBar({ handleChange, handleSubmit }) {
  return (
    <nav className="navBar">
      <h1 className="App-title">Movie List app</h1>
      <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
      <div className="nav-btn-group">
        {" "}
        <h1>My lists</h1>
        <h2>Shared Lists</h2>
      </div>
    </nav>
  );
}

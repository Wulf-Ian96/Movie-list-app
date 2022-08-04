import React from "react";

export default function SearchBar({ handleChange, handleSubmit, movie }) {
  return (
    <div>
      <form>
        {" "}
        <input className="search-input" onChange={handleChange} value={movie} />
        <button className="search-btn" onClick={handleSubmit}>
          Search
        </button>
      </form>
    </div>
  );
}

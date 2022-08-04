import React, { useState } from "react";
import Movies from "./pages.js/movies";
import { Routes, Route, BrowserRouter } from "react-router-dom";
export default function App() {
  const api_Key = process.env.REACT_APP_KEY;

  // set state for movie query
  const [movie, setMovie] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  // functions for handling input / submit to get users movie query search
  const handleChange = (event) => {
    setMovie(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(
      `https:api.themoviedb.org/3/search/movie?api_key=${api_Key}&language=en-US&query=${movie}&page=1&include_adult=false`
    )
      .then((response) => response.json())
      .then((response) => setSearchResult([...response.results]))
      .catch((err) => console.error(err));
  };
  console.log(searchResult);

  return (
    <BrowserRouter>
      {" "}
      <Routes>
        {" "}
        <Route
          path="/"
          element={
            <Movies
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              searchResult={searchResult}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

import React from "react";

export default function App() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "00f55e7dafmshf5886564aedb5a3p190497jsn2adc001668d9",
      "X-RapidAPI-Host":
        "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
    },
  };

  fetch(
    "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup?source_id=tt3398228&source=imdb&country=us",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  return <div>App</div>;
}

import React, {useState, useEffect} from "react";
import ActorDetails from "../components/actors/ActorDetails";

const [actors, viewActors] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        return json.results;
      })
      .then((movies) => {
        viewActors(movies);
      });
  }, []);
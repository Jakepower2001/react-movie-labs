import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getMovies } from "../api/tmdb-api";
import { getUpcomingMovies } from "../api/tmdb-api";

const UpcomingMoviePage = (props) => {
  const [movies, setMovies] = useState([]);
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))

  const addToFavorites = (movieId) => {
    const updatedMovies = movies.map((m) =>
      m.id === movieId ? { ...m, favorite: true } : m
    );
    setMovies(updatedMovies);
  };

  useEffect(() => {
    getUpcomingMovies().then(movies => {
      setMovies(movies);
    });
  }, []);

  return (
    <PageTemplate
      title='Discover Upcoming Movies'
      movies={movies}
      selectFavorite={addToFavorites}
    />
  );
};
export default UpcomingMoviePage;

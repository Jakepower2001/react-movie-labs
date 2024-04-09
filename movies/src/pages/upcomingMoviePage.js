import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import AddToMustWatchIcon from "../components/cardIcons/addToMustWatch";
import Spinner from '../components/spinner'

const UpcomingPage = (props) => {
  const {data, error, isLoading, isError} = useQuery('upcoming', getUpcomingMovies)


  if (isLoading) {
    return<Spinner/>
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }
  const movies = data.results;

  const mustWatch = movies.filter(m => m.mustWatch)
  localStorage.setItem('MustWatch', JSON.stringify(mustWatch))
  return (
    <PageTemplate
      title='Discover Upcoming Movies'
      movies={movies}
      action={(movie)=>{
        return <AddToMustWatchIcon movie={movie} />
        }}
    />
  );
};
export default UpcomingPage;

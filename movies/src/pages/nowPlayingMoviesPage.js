import React from "react";
import { getNowPlayingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import RemoveFromFavorites from "../components/cardIcons/removeFromFavorites";
const NowPlayingPage = (props) =>  {

    const { data, error, isLoading, isError } = useQuery('nowplaying', getNowPlayingMovies)
    
    if (isLoading) {
        return <Spinner/>
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const movies = data.results;

    const favorites = movies.filter(m => m.favorite)
    localStorage.setItem('favorites', JSON.stringify(favorites))

    return (
        <PageTemplate
        title="Movies Currently in Cinema"
        movies={movies}
        action={(movie) => {
            return(
                <>
                 <AddToFavoritesIcon movie={movie}/>
                 <RemoveFromFavorites movie={movie} />
                 </>
            );
            
        }}
        />
    );
};

export default NowPlayingPage;
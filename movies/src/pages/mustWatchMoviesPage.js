import React, { useContext} from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromMustWatch from "../components/cardIcons/removeFromMustWatch";
import WriteReview from "../components/cardIcons/writeReview";

const MustWatchMoviesPage = () => {
    const {mustWatch: movieIds} = useContext(MoviesContext);


//Makes a bunch of queries running together
const mustWatchMovieQueries = useQueries(
    movieIds.map((movieId) => {
        return {
            queryKey: ["movie", { id: movieId}],
            queryFn: getMovie,
        };
    })
);

// this will check to see if my queries are still loading

const isLoading = mustWatchMovieQueries.find((m) => m.isLoading === true);

if (isLoading) {
 return <Spinner />;
}
const movies = mustWatchMovieQueries.map((q) =>{
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
});

return (
    <PageTemplate
    title="Must-Watch Movies"
    movies={movies}
    action={(movie) => {
        return(
            <>
            <RemoveFromMustWatch movie={movie}/>
            <WriteReview movie={movie} />
            </>
        );
    }}
    />
);
};


export default MustWatchMoviesPage;
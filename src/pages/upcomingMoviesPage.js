import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchListButton from '../components/buttons/addToWatchList'

const MovieListPage = () => {
  const context = useContext(MoviesContext);
  const upcoming = context.upcoming.filter((m) => {  // New
    return !("favorite" in m);
  });

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={upcoming}  /* Changed */
      action={(upcoming) => {
        return <AddToWatchListButton movie={upcoming} />;
      }}
    />
  );
};

export default MovieListPage;
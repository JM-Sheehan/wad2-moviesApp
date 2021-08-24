import React from "react";
import MovieHeader from '../headerMovie'
import "./moviePage.css";

const TemplateMoviePage = ({ movie, children }) => {
  return (
    <>
      <MovieHeader movie={movie} />
      <div className="row">
        <div className="col-3">
          <img
            src={"./film-poster-placeholder.png"
            }
            className="movie"
            alt={movie.title}
          />
        </div>
        <div className="col-9">{children}</div>
      </div>
    </>
  );
};

export default TemplateMoviePage;
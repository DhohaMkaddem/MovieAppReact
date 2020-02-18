import React from "react";
import MovieModal from "./MovieModal";
import MovieList from "./MovieList";

const MovieContainer = props => {
  return (
    <div className="movie-container">
      <MovieList
        movieList={props.movieList}
        searchBar={props.searchBar}
        rating={props.rating}
      />
      <button onClick={props.toggleModal}>Add a movie</button>
      {props.isModalRendred && (
        <MovieModal
          onSubmitMovie={props.onSubmitMovie}
          toggleModal={props.toggleModal}
        />
      )}
    </div>
  );
};
export default MovieContainer;

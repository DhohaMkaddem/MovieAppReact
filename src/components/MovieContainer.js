import React from "react";
import MovieModal from "./MovieModal";
import MovieList from "./MovieList";
import { connect } from "react-redux";
import { clearMovie } from "../store/actions/index";

const MovieContainer = props => {
  const clearModal = () => {
    props.clearMovie();
    props.toggleModal();
  };
  return (
    <div className="movie-container">
      <MovieList
        movieList={props.movieList}
        searchBar={props.searchBar}
        rating={props.rating}
        toggleModal={props.toggleModal}
      />
      <button onClick={clearModal}>Add a movie</button>
      {props.isModalRendred && (
        <MovieModal
          onSubmitMovie={props.onSubmitMovie}
          toggleModal={props.toggleModal}
        />
      )}
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  clearMovie: () => dispatch(clearMovie())
});

export default connect(null, mapDispatchToProps)(MovieContainer);

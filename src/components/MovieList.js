import React from "react";
import MovieCard from "./MovieCard";
import { connect } from "react-redux";

const MovieList = ({ movieList, rating, searchBar, toggleModal }) => {
  return (
    <div className="movie-list">
      {searchBar
        ? movieList
            .filter(movie => movie.title.includes(searchBar))
            .map(movie => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                imgPath={movie.imgPath}
                rating={movie.rating}
                toggle={toggleModal}
              />
            ))
        : movieList
            .filter(movie => movie.rating >= rating)
            .map(movie => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                imgPath={movie.imgPath}
                rating={movie.rating}
                id={movie.id}
                toggle={toggleModal}
              />
            ))}
    </div>
  );
};

const mapStateToProps = state => ({
  movieList: state.movieList
});

export default connect(mapStateToProps)(MovieList);

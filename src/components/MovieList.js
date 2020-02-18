import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movieList, rating, searchBar }) => {
  const search = movie => {
    if (movie.title.includes(searchBar) || movie.rating === rating) {
      return true;
    }
  };
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
              />
            ))}
    </div>
  );
};

export default MovieList;

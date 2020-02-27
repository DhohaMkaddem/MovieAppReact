import React from "react";
import StarsRating from "./StarsRating";
import { connect } from "react-redux";
import { deleteMovie, getMovie, editMovie } from "../store/actions/index";
import { Link } from "react-router-dom";

const MovieCard = ({
  rating,
  title,
  imgPath,
  deleteMovie,
  id,
  toggle,
  getMovie
}) => {
  const deleteMovieItem = () => deleteMovie(id);
  const editMovieItem = () => {
    getMovie(id);
    toggle();
  };

  return (
    <div className="movie-card">
      <StarsRating rating={Number(rating)} />
      <img src={imgPath} alt={title} style={{ height: "150px" }} />
      <p>{title}</p>
      <Link to={`/description/${id}`}>read description</Link>
      <button onClick={deleteMovieItem}>delete</button>
      <button onClick={editMovieItem}>edit</button>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  deleteMovie: id => dispatch(deleteMovie(id)),
  getMovie: id => dispatch(getMovie(id)),
  editMovie: movie => dispatch(editMovie(movie))
});

export default connect(null, mapDispatchToProps)(MovieCard);

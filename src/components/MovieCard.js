import React from "react";
import StarsRating from "./StarsRating";

const MovieCard = ({ rating, title, imgPath }) => {
  return (
    <div className="movie-card">
      <StarsRating rating={Number(rating)} />
      <img src={imgPath} alt={title} style={{ height: "150px" }} />
      <p>{title}</p>
    </div>
  );
};

export default MovieCard;

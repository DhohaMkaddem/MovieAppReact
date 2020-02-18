import React from "react";
import StarsRating from "./StarsRating";

const SearchForm = props => {
  return (
    <div className="search-form">
      <span>search for a movie</span>
      <input onChange={props.onChangeSearch} />
      <StarsRating
        rating={props.rating}
        onChange={props.onChangeRatingSearch}
      />
    </div>
  );
};
export default SearchForm;

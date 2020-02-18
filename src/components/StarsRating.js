import React from "react";

const StarsRating = ({ onChange, rating }) => {
  return (
    <div>
      <input
        type="radio"
        name="rating"
        value={1}
        onClick={onChange ? onChange : null}
        className={"star " + (Number(rating) >= 1 ? "checked-star" : "")}
      />
      <input
        type="radio"
        name="rating"
        value={2}
        onClick={onChange ? onChange : null}
        className={"star " + (Number(rating) >= 2 ? "checked-star" : "")}
      />
      <input
        type="radio"
        name="rating"
        value={3}
        onClick={onChange ? onChange : null}
        className={"star " + (Number(rating) >= 3 ? "checked-star" : "")}
      />
      <input
        type="radio"
        name="rating"
        value={4}
        onClick={onChange ? onChange : null}
        className={"star " + (Number(rating) >= 4 ? "checked-star" : "")}
      />
      <input
        type="radio"
        name="rating"
        value={5}
        onClick={onChange ? onChange : null}
        className={"star " + (Number(rating) === 5 ? "checked-star" : "")}
      />
    </div>
  );
};

export default StarsRating;

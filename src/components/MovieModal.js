import React, { Component } from "react";
import StarsRating from "./StarsRating";

class MovieModal extends Component {
  state = {
    title: "",
    imgPath: "",
    rating: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmitChildSide = e => {
    e.preventDefault();
    this.props.onSubmitMovie({
      ...this.state,
      id: Date.now()
    });
    // for closing the modal after adding a movie
    this.props.toggleModal();
  };

  render() {
    return (
      <div className="movie-modal">
        <h1>add a movie</h1>
        <form onSubmit={this.onSubmitChildSide}>
          <span>Movie title</span>
          <input name="title" onChange={this.onChange} />
          <span>image path</span>
          <input name="imgPath" onChange={this.onChange} />
          <StarsRating
            rating={Number(this.state.rating)}
            onChange={this.onChange}
          />

          <button>add</button>
        </form>
      </div>
    );
  }
}

export default MovieModal;

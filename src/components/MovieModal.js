import React, { Component } from "react";
import StarsRating from "./StarsRating";
import { addMovie, editMovie, setMovieTest } from "../store/actions/index";
import { connect } from "react-redux";

class MovieModal extends Component {
  state = {
    title: "",
    imgPath: "",
    rating: ""
  };

  componentDidMount() {
    if (this.props.movie) {
      const { title, imgPath, rating } = this.props.movie;
      this.setState({
        title,
        imgPath,
        rating
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitChildSide = () => {
    this.props.addMovie({
      id: Date.now(),
      ...this.state
    });
  };

  handleEditMovie = () => {
    this.props.editMovie(this.state);
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.props.movie) {
      this.handleEditMovie();
    } else {
      this.onSubmitChildSide();
    }
    this.props.toggleModal();
  };

  render() {
    return (
      <div className="movie-modal">
        <h1>add a movie</h1>
        <form onSubmit={this.onSubmit}>
          <span>Movie title</span>
          <input
            name="title"
            onChange={this.onChange}
            value={this.state.title}
          />
          <span>image path</span>
          <input
            name="imgPath"
            onChange={this.onChange}
            value={this.state.imgPath}
          />
          <StarsRating
            rating={Number(this.state.rating)}
            onChange={this.onChange}
          />

          <button type="submit">
            {this.props.movie === null ? "add" : "save"}
          </button>
          <button onClick={this.props.toggleModal}>close</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addMovie: movie => dispatch(addMovie(movie)),
  editMovie: movie => dispatch(editMovie(movie)),
  setMovieTest: movie => dispatch(setMovieTest(movie))
});

const mapStateToProps = state => ({
  movie: state.movie,
  movieTest: state.movieTest
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieModal);

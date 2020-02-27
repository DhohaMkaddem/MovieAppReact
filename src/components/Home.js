import React from "react";
import SearchForm from "./SearchForm";
import MovieContainer from "./MovieContainer";

class Home extends React.Component {
  state = {
    isModalRendred: false,
    searchBar: "",
    rating: "",
    isLoading: false
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: !this.state.isLoading });
    }, 5000);
  }

  onChangeSearch = e => {
    this.setState({ searchBar: e.target.value });
  };

  toggleModal = () => {
    this.setState({ isModalRendred: !this.state.isModalRendred });
  };

  onSubmitMovie = movie => {
    this.setState({
      movieList: this.state.movieList.concat(movie)
    });
  };

  onChangeRatingSearch = e => {
    this.setState({ rating: Number(e.target.value) });
  };

  render() {
    return (
      <div>
        <SearchForm
          onChangeSearch={this.onChangeSearch}
          onChangeRatingSearch={this.onChangeRatingSearch}
          rating={this.state.rating}
        />
        <MovieContainer
          toggleModal={this.toggleModal}
          isModalRendred={this.state.isModalRendred}
          onSubmitMovie={this.onSubmitMovie}
          movieList={this.state.movieList}
          searchBar={this.state.searchBar}
          rating={this.state.rating}
        />
      </div>
    );
  }
}

export default Home;

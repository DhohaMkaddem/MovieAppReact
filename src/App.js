import React from "react";
import SearchForm from "./components/SearchForm";
import MovieContainer from "./components/MovieContainer";
import "./App.css";
import WithLoading from "./components/WithLoading";
const WithLoadingList = WithLoading(MovieContainer);
class App extends React.Component {
  state = {
    movieList: [
      {
        title: "Inception",
        imgPath:
          "https://cdn.shopify.com/s/files/1/1416/8662/products/inception_2010_advance_original_film_art_66f46508-3e2b-4de3-aa71-db767549e17d_2000x.jpg?v=1577405010",
        rating: 4,
        id: 1
      },
      {
        title: "Mandarines",
        imgPath:
          "https://fr.web.img6.acsta.net/pictures/16/01/13/15/26/119785.jpg",
        rating: 5,
        id: 5
      },
      {
        title: "the room",
        imgPath:
          "https://www.tommywiseau.com/wp-content/uploads/2016/12/wsi-imageoptim-TheRoomPosterA.jpeg",
        rating: 1,
        id: 6
      },
      {
        title: "Joker",
        imgPath:
          "https://images-na.ssl-images-amazon.com/images/I/710MAaieKaL._AC_SY679_.jpg",
        rating: 5,
        id: 7
      }
    ],
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
        <WithLoadingList
          isLoading={this.state.isLoading}
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

export default App;

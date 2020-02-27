import {
  ADD_MOVIE,
  DELETE_MOVIE,
  EDIT_MOVIE,
  SEARCH_MOVIE,
  READ_DESCRIPTION,
  GET_MOVIE,
  CLEAR_MOVIE
} from "../constants/action_types";

const initialState = {
  movieList: [
    {
      title: "Joker",
      imgPath:
        "https://images-na.ssl-images-amazon.com/images/I/710MAaieKaL._AC_SY679_.jpg",
      rating: 5,
      id: "7"
    },
    {
      title: "inception",
      imgPath:
        "https://cdn.shopify.com/s/files/1/1416/8662/products/inception_2010_advance_original_film_art_66f46508-3e2b-4de3-aa71-db767549e17d_2000x.jpg?v=1577405010",
      rating: 5,
      id: "8"
    }
  ],
  movie: null,
  searchBar: "",
  rating: ""
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return { ...state, movieList: [...state.movieList, action.payload] };
    case DELETE_MOVIE:
      return {
        ...state,
        movieList: state.movieList.filter(movie => movie.id !== action.payload)
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: state.movieList.find(movie => movie.id === action.payload)
      };
    case CLEAR_MOVIE:
      return {
        ...state,
        movie: null
      };
    case EDIT_MOVIE:
      return {
        ...state,
        movieList: state.movieList.map(movie => {
          if (movie.id === state.movie.id) {
            return {
              ...movie,
              title: action.payload.title,
              imgPath: action.payload.imgPath,
              rating: action.payload.rating
            };
          } else {
            return movie;
          }
        })
      };
    case SEARCH_MOVIE:
      return {};
    case READ_DESCRIPTION:
      return {};

    default:
      return initialState;
  }
};
export default movieReducer;

// if (movie.id === state.movie.id) {
//   return { ...movie };
// } else {
//   return movie;
// }
// })

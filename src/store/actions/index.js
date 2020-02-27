import {
  ADD_MOVIE,
  EDIT_MOVIE,
  DELETE_MOVIE,
  SEARCH_MOVIE,
  READ_DESCRIPTION,
  GET_MOVIE,
  CLEAR_MOVIE,
  SET_MOVIE_TEST
} from "../constants/action_types";

export const addMovie = movie => ({ type: ADD_MOVIE, payload: movie });

export const editMovie = movie => ({ type: EDIT_MOVIE, payload: movie });

export const deleteMovie = id => ({ type: DELETE_MOVIE, payload: id });

export const searchMovie = movieList => ({
  type: SEARCH_MOVIE,
  payload: movieList
});

export const readDescription = movie => ({
  type: READ_DESCRIPTION,
  payload: movie
});
export const clearMovie = () => ({
  type: CLEAR_MOVIE
});

export const getMovie = id => ({
  type: GET_MOVIE,
  payload: id
});

export const setMovieTest = movie => ({
  type: SET_MOVIE_TEST,
  payload: movie
});

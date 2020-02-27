import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovie } from "../store/actions/index";
import Loader from "./Loader";

class Description extends Component {
  componentDidMount() {
    this.props.getMovie(this.props.match.params.id);
  }

  render() {
    if (!this.props.movie) {
      return <Loader />;
    }

    return (
      <div>
        <h1>DESCRIPTION PAGE</h1>
        <h1>{this.props.movie.title}</h1>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  getMovie: id => dispatch(getMovie(id))
});

const mapStateToProps = state => ({
  movie: state.movie
});

export default connect(mapStateToProps, mapDispatchToProps)(Description);

import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = props => {
  return (
    <div>
      <h1>Loading</h1>
      <Spinner animation="border" />
    </div>
  );
};

export default Loader;

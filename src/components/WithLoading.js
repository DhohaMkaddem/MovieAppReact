import React from "react";
import Loader from "./Loader";
//import { Spinner } from "react-bootstrap";

function WithLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (isLoading) return <Component {...props} />;
    return <Loader />;
  };
}

export default WithLoading;

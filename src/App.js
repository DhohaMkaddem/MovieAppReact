import React from "react";
import { Provider } from "react-redux";
import AppRouter from "./router/AppRouter";
import store from "./store/createStore";
import "./App.css";

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;

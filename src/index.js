// General Import
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Import CSS
import "./css/style.css";

const Index = () => {
  return <App val={888} />;
};

ReactDOM.render(<Index />, document.querySelector("#root"));

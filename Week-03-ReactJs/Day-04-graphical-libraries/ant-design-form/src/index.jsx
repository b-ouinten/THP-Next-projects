import React from "react";
import ReactDOM from "react-dom";
import Navigator from "./components/Navigator";
import "antd/dist/antd.css";

function App() {
  return (
    <Navigator />
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

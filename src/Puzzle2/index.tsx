import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Puzzle2 from "./puzzle2";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Puzzle2 />
  </React.StrictMode>
);

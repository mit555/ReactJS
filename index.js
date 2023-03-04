import React from "react";
import ReactDOM from "react-dom";

const fname = "mitesh";
const lname = "hardikar";
const year = 2023;

ReactDOM.render(
  <div>
    <p>Created by {fname + " " + lname}</p>
    <p>CopyRight 2023</p>
  </div>,
  document.getElementById("root")
);

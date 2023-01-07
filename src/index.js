import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import firebase from "fbApp";

console.log(firebase);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

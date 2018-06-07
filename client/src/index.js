import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import store from "store";
import App from "./App.js";

// axios.defaults.headers.common["Authorization"] = "Bearer " + store.get("token");

ReactDOM.render(<App />, document.getElementById("root"));

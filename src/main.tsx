import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/store";
import {rerenderEntireTree} from "./render";

rerenderEntireTree(store);

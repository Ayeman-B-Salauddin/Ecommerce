import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/card/Card.jsx";
import store from "./redux/store.js";


const App = (props) => {

  return (
      <div>
       <Card productsPage={props.store.productsPage} dispatch={store.dispatch.bind(store)}/>
      </div>
  )
}

export default App

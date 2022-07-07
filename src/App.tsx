import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/card/Card";

const App = (props) => {
  return (
      <div>
       <Card store={props.store.productsPage}/>
      </div>
  )
}

export default App

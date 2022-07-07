import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/card/Card";
import store from "./redux/store";


const App = (props) => {

  return (
      <div>
       <Card store={store}/>
      </div>
  )
}

export default App

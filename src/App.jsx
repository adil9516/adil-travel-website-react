import React from "react";

import Home from "./Home";
import { Switch, Route } from "react-router-dom";
import Services from "./Services";
import Products from "./Products";
import SIgnup from "./SIgnup";

function App() {
  return (
    <div>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/Services" component={Services}></Route>
      <Route exact path="/Products" component={Products}></Route>
      <Route path='/Signup' component={SIgnup}></Route>
    </div>
  );
}

export default App;

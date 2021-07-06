import React from "react";

import "assets/scss/bootstrap.scss";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "pages/Homepage";
import Product from "pages/Product";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/products" component={Product} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;

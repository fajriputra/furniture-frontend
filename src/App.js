import React, { useEffect } from "react";

import "assets/scss/bootstrap.scss";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "pages/Homepage";
import Product from "pages/Product";
import Login from "pages/Login";
import Register from "pages/Register";

import { listen } from "helpers/listener";

function App() {
  // memanggil fungsi listen sekali saja saat komponent pertama kali selesai di render
  useEffect(() => {
    listen();
  }, []);

  return (
    <>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/products" component={Product} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;

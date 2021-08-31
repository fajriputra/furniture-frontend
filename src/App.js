import React, { useEffect } from "react";

import "assets/scss/bootstrap.scss";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "pages/Homepage";
import Register from "pages/Register";
import Login from "pages/Login";
import Product from "pages/Product";
import Cart from "pages/Cart";

import { listen } from "helpers/listener";
import { getCart } from "helpers/api/cart";
import { ToastContainer } from "react-toastify";

function App() {
  // memanggil fungsi listen sekali saja saat komponent pertama kali selesai di render
  useEffect(() => {
    listen();
    getCart();
  }, []);

  // const notify = () => toast("Test only");

  return (
    <>
      <div className="App">
        {/* <button onClick={notify}>click</button> */}
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/products" component={Product} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </Router>
        <ToastContainer
          autoClose={1000}
          bodyClassName="custom-color-toast"
          pauseOnHover={false}
        />
      </div>
    </>
  );
}

export default App;

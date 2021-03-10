import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Cart from "./route/Cart";
import HomePage from "./route/HomePage";
import Nav from "./navbar/Nav";
import Login from "./route/Login";


const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <main>
        <Switch>
          <Route path="/" exact><HomePage /> </Route>
          <Route path="/cart" exact> <Cart /></Route>
          <Route path="/login" exact> <Login /></Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;

import * as React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Blog from "./Blog";
import Blogone from "./Blogone";
import Admin from "./Admin";

/* HOOK REACT EXAMPLE */
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route component={Blog} exact path="/" />

        <Route component={Admin} exact path="/blogs/admin" />
        <Route component={Blogone} exact path="/blogs/:id" />

        <Route exact path="*">
          {() => <h1>404: Not Found</h1>}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

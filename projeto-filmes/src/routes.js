import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Erro from "./pages/Erro";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/*" component={Erro} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

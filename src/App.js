import React from "react";
import "./App.css";
import { HomepageComponent } from "./pages/homePage/HomepageComponent";
import { Switch, Route } from "react-router-dom";
import ShopPageComponent from "./pages/shopPage/ShopPageComponent";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomepageComponent} />
        <Route path="/shop" component={ShopPageComponent} />
      </Switch>
    </div>
  );
}

export default App;

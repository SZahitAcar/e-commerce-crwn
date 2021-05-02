import React from "react";
import "./App.css";
import { HomepageComponent } from "./pages/homePage/HomepageComponent";
import { Switch, Route } from "react-router-dom";
import ShopPageComponent from "./pages/shopPage/ShopPageComponent";
import { HeaderComponent } from "./components/header/HeaderComponent";
import { SignUpInPagesComponent } from "./pages/signUpIn/SignUpInPagesComponent";

function App() {
  return (
    <div>
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={HomepageComponent} />
        <Route path="/shop" component={ShopPageComponent} />
        <Route path="/signin" component={SignUpInPagesComponent} />
      </Switch>
    </div>
  );
}

export default App;

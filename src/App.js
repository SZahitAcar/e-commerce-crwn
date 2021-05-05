import React from "react";
import "./App.css";
import { HomepageComponent } from "./pages/homePage/HomepageComponent";
import { Switch, Route } from "react-router-dom";
import ShopPageComponent from "./pages/shopPage/ShopPageComponent";
import { HeaderComponent } from "./components/header/HeaderComponent";
import { SignUpInPagesComponent } from "./pages/signUpIn/SignUpInPagesComponent";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <HeaderComponent currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomepageComponent} />
          <Route path="/shop" component={ShopPageComponent} />
          <Route path="/signin" component={SignUpInPagesComponent} />
        </Switch>
      </div>
    );
  }
}

export default App;

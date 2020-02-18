import React from "react";
import "./index.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Users from "./user/pages/users";
import NewPlace from "./places/pages/newplace";
import Header from "./shared/components/header";
import UserPlaces from "./places/pages/user-places";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Users} />
          {/* <Route path=":userId/places" component={UserPlaces} /> */}

          <Route exact path="/:userId/places" component={UserPlaces} />
          <Route exact path="/places/new" component={NewPlace} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;

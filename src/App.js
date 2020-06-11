import React from "react";
import "./index.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Users from "./user/pages/users";
import NewPlace from "./places/pages/newplace";
import Header from "./shared/components/header";
import UserPlaces from "./places/pages/user-places";
import Auth from "./user/pages/auth";
import UpdatePlace from "./places/pages/updatePlace";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Users} />
          {/* <Route path=":userId/places" component={UserPlaces} /> */}
          <Route path="/auth" component={Auth} />
          <Route path="/:userId/places" component={UserPlaces} />
          <Route path="/places/new" component={NewPlace} />
          <Route path="/places/:placeId" component={UpdatePlace} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;

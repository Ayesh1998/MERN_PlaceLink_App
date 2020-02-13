import React from "react";
import "./index.css";
import { Route, Switch, Redirect } from "react-router-dom";
// import Users from "./user/pages/users";
// import NewPlace from "./places/pages/newplace";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Switch>
          <Route exact path="/" component={Users} />
          <Route path="/places/new" component={NewPlace} />
          <Redirect to="/" />
        </Switch> */}
      </div>
    );
  }
}

export default App;

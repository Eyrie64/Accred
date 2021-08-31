import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Users from "./Users";
import Message from "./Message";
import Programmes from "./Programmes";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path = "/dashboard">
          <Header />
          <Dashboard />
        </Route>
        <Route path = "/users">
          <Header />
          <Users />
        </Route>
        <Route path ="/message">
          <Header/>
          <Message/>
        </Route>
        <Route path = "/programmes">
          <Header/>
          <Programmes/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

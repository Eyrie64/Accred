import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./Login";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Users from "./Users";
import Message from "./Message";
import Programmes from "./Programmes";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import Status from "./Status";
import ExternalStatus from "./ExternalStatus";
import ExistingStatus from "./ExistingStatus";
import Ugreq from "./Ugreq";
import NabReq from "./NabReq";
import NcteReq from "./NcteReq";
import ProgrammeClient from "./ProgrammeClient";
import ExistingReq from "./ExistingReq";
import Update from "./Update";
import ExtUpdate from "./ExtUpdate";
import ExisUpdate from "./ExisUpdate";
import Header1 from "./HeaderSidebar";
import routes from "./helpers/routes";
import Notification from "./Notification";
import Newform from "./NewForm";

function PrivateRoute({ children, ...rest }) {
  const { isAuthenticated } = useContext(AuthContext);
  const { path } = rest;
  console.log(path);
  const user = localStorage.getItem("user");
  return (
    <Route
      {...rest}
      render={() => {
        if (isAuthenticated) {
          if (!routes[user]?.includes(path)) {
            return <Redirect to="/" />;
          } else {
            return children;
          }
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
}

function PublicRoute({ children, ...rest }) {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={() => {
        if (isAuthenticated) {
          return <Redirect to="/" />;
        } else {
          return children;
        }
        return null;
      }}
    />
  );
}

const App = () => {
  const user = localStorage.getItem("user");

  return (
    <Router>
      <Switch>
        <PublicRoute path="/login">
          <Login />
        </PublicRoute>
        <PrivateRoute exact path="/exisupdate">
          <Header1 />
          <ExisUpdate />
        </PrivateRoute>
        <PrivateRoute exact path="/newform">
          <Header1 />
          <Newform />
        </PrivateRoute>
        <PrivateRoute exact path="/extupdate">
          <Header1 />
          <ExtUpdate />
        </PrivateRoute>
        <PrivateRoute exact path="/update">
          <Header1 />
          <Update />
        </PrivateRoute>
        <PrivateRoute exact path="/notifications">
          <Header1 />
          <Message />
        </PrivateRoute>
        <PrivateRoute exact path="/notif">
          {user == "vc" ? <Header /> : <Header1 />}
          <Notification />
        </PrivateRoute>
        <PrivateRoute exact path="/ugreq">
          <Header1 />
          <Ugreq />
        </PrivateRoute>
        <PrivateRoute exact path="/status">
          <Header1 />
          <Status />
        </PrivateRoute>
        <PrivateRoute path="/external-status">
          <Header1 />
          <ExternalStatus />
        </PrivateRoute>
        <PrivateRoute path="/existing-status">
          <Header1 />
          <ExistingStatus />
        </PrivateRoute>
        <PrivateRoute exact path="/existingreq">
          <Header1 />
          <ExistingReq />
        </PrivateRoute>
        <PrivateRoute exact path="/programme">
          <Header1 />
          <ProgrammeClient />
        </PrivateRoute>
        <PrivateRoute exact path="/nctereq">
          <Header1 />
          <NcteReq />
        </PrivateRoute>
        <PrivateRoute exact path="/nabreq">
          <Header1 />
          <NabReq />
        </PrivateRoute>
        <PrivateRoute path="/users">
          <Header />
          <Users />
        </PrivateRoute>
        <Route path="/message">
          <Header />
          <Message />
        </Route>
        <PrivateRoute path="/programmes">
          <Header />
          <Programmes />
        </PrivateRoute>
        <PrivateRoute path="/">
          {user == "vc" ? <Header /> : <Header1 />}
          <Dashboard />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default App;

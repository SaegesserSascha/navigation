import 'App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Navbar from "components/navbar/Navbar";
import routeConstants from "constants/routes";
import Navigation1 from "pages/Navigation1";
import Navigation2 from "pages/Navigation2";
import Navigation3 from "pages/Navigation3";

const {
  NAVIGATION1,
  NAVIGATION2,
  NAVIGATION3
} = routeConstants;

const navItems = [NAVIGATION1, NAVIGATION2, NAVIGATION3];

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar navItems={navItems} />

        <Switch>
          <Route exact path={NAVIGATION1.route}>
            <Navigation1 />
          </Route>
          <Route exact path={NAVIGATION2.route}>
            <Navigation2 />
          </Route>
          <Route exact path={NAVIGATION3.route}>
            <Navigation3 />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

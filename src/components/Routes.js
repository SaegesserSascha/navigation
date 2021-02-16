import {
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { routes } from "constants/routes";

export default function Routes(navItems) {
  const routeComponents = routes.map(({path, component}, key) =>
    <Route exact path={path} component={component} key={key} />
  );

  return (
    <Switch>
      {routeComponents}
    </Switch>
  );
}
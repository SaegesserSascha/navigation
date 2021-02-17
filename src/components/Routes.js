import {
  Route,
  Switch
} from "react-router-dom";

export default function Routes({matchUrl = "", routes}) {
  const routeComponents = routes.map(({ path, component }, key) =>
    <Route path={`${matchUrl}${path}`} component={component} key={key} />
  );

  return (
    <Switch>
      {routeComponents}
    </Switch>
  );
}
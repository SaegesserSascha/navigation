import {
  Route,
  Switch
} from "react-router-dom";

export default function Routes({ matchUrl = "", routes }) {
  const routeComponents = routes.map(({ path, component, children = [] }, key) => {
    if (children.length > 0) {
      return children.map(({ path, component }, key) => {
        return <Route path={`${matchUrl}${path}`} component={component} key={key} />
      })
    } else {
      return <Route path={`${matchUrl}${path}`} component={component} key={key} />
    }
  });

  return (
    <Switch>
      {routeComponents}
    </Switch>
  );
}
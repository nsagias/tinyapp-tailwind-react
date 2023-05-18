import { Route } from "react-router-dom";

export default function RouteAuth ({routeData}: {routeData: any}): JSX.Element {
  return (
    <Route path={routeData.path} element={`{<${routeData.componentName} />}`} />
  );
}
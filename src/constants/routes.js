import { default as Navigation1 } from "pages/navigation1/Navigation1";
import { default as Navigation2 } from "pages/navigation2/Navigation2";
import { default as Navigation3 } from "pages/navigation3/Navigation3";

export const routes = [
  {
    path: "/navigation1",
    component: Navigation1,
    name: "Navigation 1"
  },
  {
    path: "/navigation2",
    component: Navigation2,
    name: "Navigation 2"
  },
  {
    path: "/navigation3",
    component: Navigation3,
    name: "Navigation 3"
  }
];
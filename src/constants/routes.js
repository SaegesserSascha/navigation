import { default as Navigation1 } from "pages/Navigation1";
import { default as Navigation2 } from "pages/Navigation2";
import { default as Navigation3 } from "pages/Navigation3";

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
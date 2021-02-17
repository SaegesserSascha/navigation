import { default as Page1 } from "pages/examplePages/Page1";
import { default as Page2 } from "pages/examplePages/Page2";
import { default as Page3 } from "pages/examplePages/Page3";
import { default as Page4 } from "pages/examplePages/Page4";
import { default as Page5 } from "pages/examplePages/Page5";
import { default as Page6 } from "pages/examplePages/Page6";
import { default as Page7 } from "pages/examplePages/Page7";

export const routes = [
  {
    path: "/page1",
    component: Page1,
    name: "Page 1"
  },
  {
    path: "/page2",
    component: Page2,
    name: "Page 2"
  },
  {
    path: "/page3",
    component: Page3,
    name: "Page 3"
  },
  {
    path: "/page4",
    component: Page4,
    name: "Page 4"
  },
  {
    path: "/page5",
    component: Page5,
    name: "Page 5"
  },
  {
    path: "/page6",
    component: Page6,
    name: "Page 6"
  },
  {
    path: "/page7",
    component: Page7,
    name: "Page 7"
  },
];
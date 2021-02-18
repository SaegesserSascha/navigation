import Page1 from "pages/examplePages/Page1";
import Page2 from "pages/examplePages/Page2";
import Page3 from "pages/examplePages/Page3";
import Page4 from "pages/examplePages/Page4";
import Page5 from "pages/examplePages/Page5";
import Page6 from "pages/examplePages/Page6";
import Page7 from "pages/examplePages/Page7";
import SubPage1 from "pages/examplePages/SubPage1";
import SubPage2 from "pages/examplePages/SubPage2";
import SubPage3 from "pages/examplePages/SubPage3";
import SubPage4 from "pages/examplePages/SubPage4";
import SubPage5 from "pages/examplePages/SubPage5";

export const routes = [
  {
    path: "/page1",
    component: Page1,
    name: "Page 1",
  },
  {
    path: "/page2",
    component: Page2,
    name: "Page 2",
    children: [{
      path: "/subpage1",
      component: SubPage1,
      name: "Subpage 1"
    },
    {
      path: "/subpage2",
      component: SubPage2,
      name: "Subpage 2"
    }]
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
    name: "Page 5",
    children: [{
      path: "/subpage3",
      component: SubPage3,
      name: "Subpage 3"
    },
    {
      path: "/subpage4",
      component: SubPage4,
      name: "Subpage 4"
    },
    {
      path: "/subpage5",
      component: SubPage5,
      name: "Subpage 5"
    }]
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
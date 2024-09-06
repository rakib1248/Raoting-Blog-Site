import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import Layout from "../Layout/Layout";

import About from "../pages/About/About";
import Team from "../pages/Team/Team";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import Singleblog from "../pages/Blog/Singleblog";
import Teamsingle from "../pages/Team/Teamsingle";

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/team",
        element: <Team/>,
      },
      {
        path: "/team/:id",
        element: <Teamsingle/>,
      },
      {
        path: "/blog",
        element: <Blog/>,
      },
      {
        path: "/blog/:id",
        element: <Singleblog/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
    
    ],
  },
]);

export default router;

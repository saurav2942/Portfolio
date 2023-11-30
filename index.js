import React, { Component } from "react";
import ReactDom from "react-dom/client";
import App from "./src/components/App";
import ProjectsPage from "./src/components/ProjectsPage";
import Body from "./src/components/Body";
import Resume from "./src/components/Resume";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
    ],
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

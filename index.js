import React, { lazy, Suspense } from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shimmer from "./src/components/Shimmer";

const App = lazy(() => import("./src/components/App"));
const ProjectsPage = lazy(() => import("./src/components/ProjectsPage"));
const Body = lazy(() => import("./src/components/Body"));
const Resume = lazy(() => import("./src/components/Resume"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Shimmer />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/projects",
        element: (
          <Suspense fallback={<Shimmer />}>
            <ProjectsPage />
          </Suspense>
        ),
      },
      {
        path: "/resume",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Resume />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from "./Dashboard";
import NotFound from "./NotFound";
import Pagination from "./Pagination";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/pagination",
      element: <Pagination />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/todo",
      element: <Dashboard />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;

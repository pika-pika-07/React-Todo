import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from "./Dashboard";
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
    // {
    //   path: "*",
    //   element: <NotFound />,
    // },
    // {

    // }
  ]);
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
      {/* <Dashboard/> */}
    </div>
  );
};

export default Body;

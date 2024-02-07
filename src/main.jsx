import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GuestLayout from "./layouts/Guest.jsx";
import Header from "./components/Header.jsx";
import MainPage from "./components/Main.jsx";

import ErrorPageFound from "./components/ErrorPage.jsx";
import MenuPage from "./components/MenuPage.jsx";

import FollowersPage from "./components/FollowersPage.jsx";

const router = createBrowserRouter([
  {
    path: "/", //it will work like that. /some.some index.element
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        element: <Header />,
      },
      {
        path: "/about",
        element: <MainPage />,
      },
      {
        path: "/about/:name",
        element: <MainPage />,
      },
      {
        path: "/menu",
        element: <MenuPage />,
      },

      {
        path: "/followers",
        element: <FollowersPage />,
      },
    ],
    errorElement: <ErrorPageFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

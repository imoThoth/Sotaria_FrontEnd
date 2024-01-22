import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";import "./App.css";
import Navbar from "./components/layout/navbar/Navbar";
import Home from "./components/layout/routes/Home";
import Forum from "./components/layout/routes/Forum";
import Chart from "./components/layout/routes/Chart";
import './index.css';
import { AuthContextProvider } from "./components/service/AuthContext";

const AppLayout = () => (
  <>
      <Navbar />
      <Outlet />
  </>
)


const router = createBrowserRouter([
  {
      element: <AppLayout />,
      children: [
          {
              path: "/",
              element: <Home />,
          },
          {
              path: "forum",
              element: <Forum />,
          },
          {
              path: "chart",
              element: <Chart />,
          }
      ]
  }
 
]);

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
     <RouterProvider router={router} />
  </AuthContextProvider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

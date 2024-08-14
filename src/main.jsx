import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Pagination from "./pagination/Pagination.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout.jsx";

const router = createBrowserRouter(
  
 [{
  path: '/',
  element: <Layout />,
  children: [
    {

      path : '/',
      element: <App/>
    },
    {
      path: "/pagination",
      element: <Pagination />,
      },
  ]
 }

 ]
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

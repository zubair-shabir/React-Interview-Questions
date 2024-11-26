import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Pagination from "./pagination/Pagination.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import { ThemeProvider } from "./ThemeContext/ThemeContext.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import Todo from "./Todo/Todo.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/pagination",
        element: <Pagination />,
      },
      {
        path: "/todo",
        element: <Todo />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);

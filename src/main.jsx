import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import store from "./store/store.js";
import { Provider } from "react-redux";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layout/Root.jsx";
import AuthForm from "./features/auth/AuthForm.jsx";
import BooksList from "./features/books/BooksList.jsx";
import BooksDetails from "./features/books/BooksDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/book", element: <BooksList /> },
      { path: "/book/:id", element: <BooksDetails /> },
      { path: "/login", element: <AuthForm /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

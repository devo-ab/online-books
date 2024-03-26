import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import ListedBooks from "./components/ListedBooks/ListedBooks";
import PagesToRead from "./components/PagesToRead/PagesToRead";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import BooksDetails from "./components/BooksDetails/BooksDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('books.json')
      },
      {
        path:"/books-details",
        element:<BooksDetails></BooksDetails>
      },
      {
        path:"/listed-books",
        element: <ListedBooks></ListedBooks>
      },
      {
        path:"/pages-to-read",
        element: <PagesToRead></PagesToRead>
      },
      {
        path:"/about",
        element: <About></About>
      },
      {
        path:"/contact",
        element: <Contact></Contact>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

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
import ReadBooks from "./components/ReadBooks/ReadBooks";
import WishlistBooks from "./components/WishlistBooks/WishlistBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('../books.json')
      },
      {
        path:"/books-details/:bookId",
        element:<BooksDetails></BooksDetails>,
        loader: () => fetch('../books.json')
      },
      {
        path:"/listed-books",
        element: <ListedBooks></ListedBooks>,
        children:[
          {
            path:"/listed-books/reads-books",
            element:<ReadBooks></ReadBooks>,
            loader: () => fetch('../books.json')
          },
          {
            path:"/listed-books/reads-books/:bookId",
            element:<BooksDetails></BooksDetails>,
            loader: () => fetch('../books.json')
          },
          {
            path:"/listed-books/wishlist-books",
            element:<WishlistBooks></WishlistBooks>,
            loader: () => fetch('../books.json')
          },
          {
            path:"/listed-books/wishlist-books/:bookId",
            element:<BooksDetails></BooksDetails>,
            loader: () => fetch('../books.json')
          },
        ]
      },
      {
        path:"/pages-to-read",
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch('../books.json')
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

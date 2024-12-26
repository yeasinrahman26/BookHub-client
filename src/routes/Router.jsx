import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/HomePage/Home";
import Login from "../Pages/Navbar/Login";
import Register from "../Pages/Navbar/Register";
import AllBook from '../Pages/AllBook/AllBook'
import AddBook from "../Pages/AddBook/AddBook";
import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";
import PrivetRoute from "./PrivetRoute";

import UpdateBook from "../Pages/AllBook/UpdateBook";
import Novel from "../Pages/HomePage/Novel";
import Drama from "../Pages/HomePage/Drama";
import SciFi from "../Pages/HomePage/SciFi";
import Thriller from "../Pages/HomePage/Thriller";
import BookDetails from "../Pages/HomePage/BookDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: (
      <div className="text-center mt-52 p-24 font-extrabold space-y-3 text-white  bg-red-600">
        <h2 className="text-5xl">Error page</h2>
        <h2 className="text-xl">Route Not found</h2>
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },

      {
        path: "/books/category/Sci-Fi`",
        element: (
          <PrivetRoute>
            <SciFi></SciFi>
          </PrivetRoute>
        ),
      },
      {
        path: "/books/category/Thriller",
        element: (
          <PrivetRoute>
            <Thriller></Thriller>
          </PrivetRoute>
        ),
      },
      {
        path: "/books/category/Drama",
        element: (
          <PrivetRoute>
            <Drama></Drama>
          </PrivetRoute>
        ),
      },
      {
        path: "/books/category/Novel",
        element: (
          <PrivetRoute>
            <Novel></Novel>
          </PrivetRoute>
        ),
      },
      {
        path: `books/:id`,
        element: (
          <PrivetRoute>
            <BookDetails></BookDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/books/${params.id}`),
      },
      {
        path: "allBook",
        element: (
          <PrivetRoute>
            <AllBook></AllBook>
          </PrivetRoute>
        ),
      },
      {
        path: "update/:id",
        element: (
          <PrivetRoute>
            <UpdateBook></UpdateBook>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/books/${params.id}`),
      },
      {
        path: "addBook",
        element: (
          <PrivetRoute>
            <AddBook></AddBook>
          </PrivetRoute>
        ),
      },
      {
        path: "borrowedBooks",
        element: (
          <PrivetRoute>
            <BorrowedBooks></BorrowedBooks>
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default router;

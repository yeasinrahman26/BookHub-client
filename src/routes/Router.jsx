import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/HomePage/Home";
import Login from "../Pages/Navbar/Login";
import Register from "../Pages/Navbar/Register";
import AllBook from '../Pages/AllBook/AllBook'
import AddBook from "../Pages/AddBook/AddBook";
import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";
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
        path: "allBook",
        element: <AllBook></AllBook>,
      },
      {
        path: "addBook",
        element: <AddBook></AddBook>
      },
      {
        path: "borrowedBooks",
        element: <BorrowedBooks></BorrowedBooks>
      },
    ],
    
  },
]);

export default router;

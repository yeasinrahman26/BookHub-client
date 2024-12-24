import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/HomePage/Home";
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
            path:'/',
            element:<Home></Home>
        },
    ]
  },
]);

export default router;

import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";

const MainLayout = () => {
    return (
      <div className="">
        <div className="sticky top-0 z-50">
          <Navbar></Navbar>
        </div>
        <div className="max-w-7xl  mx-auto">
          <Outlet></Outlet>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    );
};

export default MainLayout;
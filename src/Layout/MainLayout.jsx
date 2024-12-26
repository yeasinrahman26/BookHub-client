import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";

const MainLayout = () => {
    return (
      <div className="">
        <div>
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
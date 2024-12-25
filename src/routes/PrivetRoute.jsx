import { useContext } from "react";
import AuthContext from "../Auth/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivetRoute = ({children}) => {


    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    
    if (loading)
      return (
        <div className="  text-center my-96">
          <div className="mx-auto">
            <span className="loading  loading-bars loading-lg"></span>
          </div>
        </div>
      );
    if (user) {
      return children;
    }

    return (
        <div>
            <Navigate to='/login' state={location?.pathname} ></Navigate>
        </div>
    );
};

export default PrivetRoute;
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import AuthContext from "../../Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const GoogleLogin = () => {
    const {googleSignIn}=useContext(AuthContext)
    const navigate = useNavigate();
  const handleGoogle = () => {
    googleSignIn()
    .then(result=>{
       const user=result.user
       Swal.fire({
         position: "top-center",
         icon: "success",
         title: `welcome ${user.displayName}`,
         showConfirmButton: false,
         timer: 1000,
       });
        navigate('/')
    }).catch(error=>{
        console.log(error.message)
    })
  };
  return (
    <div>
      <div>
        <button onClick={handleGoogle} className="btn bg-orange-400 font-bold ">
          <FaGoogle className="text-red-500  to text-3xl " /> Google SingIn
        </button>
      </div>
    </div>
  );
};

export default GoogleLogin;

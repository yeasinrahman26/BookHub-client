import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import AuthContext from "../../Auth/AuthContext";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
    const {googleSignIn}=useContext(AuthContext)
    const navigate = useNavigate();
  const handleGoogle = () => {
    googleSignIn()
    .then(result=>{
        console.log(result.user)
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

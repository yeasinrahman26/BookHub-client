import { FaGoogle } from "react-icons/fa";

const GoogleLogin = () => {
  const handleGoogle = () => {};
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

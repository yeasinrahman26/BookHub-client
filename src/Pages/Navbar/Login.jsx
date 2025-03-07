import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import { useContext } from "react";
import AuthContext from "../../Auth/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Login = () => {

  const {loginUser}=useContext(AuthContext)
  const navigate=useNavigate();
  const location=useLocation();
  const from = location.state || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(password, email);

    // login validation

    loginUser(email,password)
    .then(result=>{
      const user=result.user
      Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: `welcome ${user.displayName}`,
                  showConfirmButton: false,
                  timer: 1000,
                });
      navigate(from)
    })
    .catch(error=>{
      Swal.fire({
        icon: "error",
        title: "Check email & Password !",
        text: `${error.message}`,
      });
    })


  };

  return (
    <div className="hero bg-base-100 min-h-screen">
    <Helmet>
        <title>BookHub || Login</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center "></div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl text-center pt-5 mx-9 font-bold">
            Login now!
          </h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-white bg-[#046cf5]">
                Login
              </button>
            </div>
          </form>
          <div className="divider">Or</div>
          <h1 className="text-center pb-5 font-semibold">
            {" "}
            Don`t have an Account ?{" "}
            <Link to={"/register"} className="px-1 text-red-600 font-bold">
              Register
            </Link>
          </h1>
          <div className="mx-auto pb-5">
            <GoogleLogin></GoogleLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

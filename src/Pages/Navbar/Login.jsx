import GoogleLogin from "./GoogleLogin";

const Login = () => {

    const handleLogin=e=>{
        e.preventDefault()
        const form=e.target;
        const email=form.email.value
        const password=form.password.value
        console.log(password,email);
    }
    
    


    return (
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center "></div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-5xl text-center pt-5 mx-10 font-bold">
              Login now!
            </h1>
            <form 
            onSubmit={handleLogin} className="card-body">
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
            <div className="mx-auto pb-5">
              <GoogleLogin></GoogleLogin>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;
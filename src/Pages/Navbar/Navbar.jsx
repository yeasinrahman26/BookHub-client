import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../Auth/AuthContext";

const links = (
  <>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/allBook">All Books</NavLink>
    </li>
    <li>

      <NavLink to="/addBook">Add Book</NavLink>
    </li>
    <li>
   
      <NavLink to="/borrowedBooks">Borrowed Books</NavLink>
    </li>
  </>
);


const Navbar = () => {
  const { logout,user}=useContext(AuthContext)
  console.log(user);
  return (
    <div className="bg-base-300 rounded-md">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link
            to="/"
            className="text-2xl bg-[#0e0c57] text-white p-1  rounded-lg font-bold"
          >
            Book <span className="bg-[#046cf5] px-[2px] rounded-lg ">Hub</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-2">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          <div className="flex  md:flex-row items-center justify-between gap-2">
            {user ? (
              <div className="flex items-center gap-4">
                <h1>{user?.displayName}</h1>
                <div className="avatar">
                  <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                    <img
                      src={
                        user?.photoURL ||
                        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      }
                    ></img>
                  </div>
                </div>
                <button onClick={logout} className="btn">
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <Link to="/login">
                  <button className="btn">Login</button>
                </Link>
                <Link to="/register">
                  <button className="btn">Register</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

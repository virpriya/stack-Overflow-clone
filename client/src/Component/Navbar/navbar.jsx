import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import bars from "../../assets/bars-solid.svg";
import logo from "../../assets/logo.png";
import search from "../../assets/search-solid.svg";
import Avatar from "../Avatar/avatar";
import "./navbar.css";
import { setcurrentuser } from "../../action/currentuser";
import { jwtDecode } from "jwt-decode";

const Navbar = ({ handleSlideIn }) => {
  var user = useSelector((state) => state.currentuserreducer);
  //console.log(user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlelogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setcurrentuser(null));
  };

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedtoken = jwtDecode(token);
      if (decodedtoken.exp * 1000 < new Date().getTime()) {
        handlelogout();
      }
    }
    dispatch(setcurrentuser(JSON.parse(localStorage.getItem("Profile"))));
  }, [user?.token, dispatch]);

  return (
    <nav className="main-nav">
      <div className="navbar">
        <button className="slide-in-icon" onClick={() => handleSlideIn()}>
          <img src={bars} alt="bars" width="15"></img>
        </button>
        <div className="navbar-1">
          <Link to="/" className="nav-item nav-logo">
            <img src={logo} alt="logo"></img>
          </Link>
          <Link to="/" className="nav-item nav-btn res-nav">
            About
          </Link>
          <Link to="/" className="nav-item nav-btn res-nav">
            Products
          </Link>
          <Link to="/" className="nav-item nav-btn res-nav">
            For Teams
          </Link>
          <form>
            <input type="text" placeholder="search" />
            <img
              src={search}
              alt="search"
              className="search-icon"
              width="18"
            ></img>
          </form>
        </div>
        <div className="navbar-2">
          {user === null ? (
            <Link to="/Auth" className="nav-item nav-links">
              Log In
            </Link>
          ) : (
            <>
              <Avatar
                backgroundColor="#009dff"
                px="10px"
                py="7px"
                borderRadius="50%"
                color="white"
              >
                <Link
                  to={`/Users/${user?.result?._id}`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {user.result.name.charAt(0).toUpperCase()}
                </Link>
              </Avatar>
              <button className="nav-item nav-links" onClick={handlelogout}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

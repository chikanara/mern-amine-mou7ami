import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../js/actions/userAction";

const NavBar = () => {
    const dispatch = useDispatch()
    const logoutUser = () => {
        dispatch(logout())
    }
    const isAuth = useSelector(state => state.userReducer.isAuth)
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            src="https://raw.githubusercontent.com/shahzaibkhalid/mern-app-generator/master/static/logo.png"
            alt=""
            style={{
              width: "70px",
              height: "70px",
              marginLeft: "60px",
              marginRight: "100px",
            }}
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/profile">
            Profile
          </Link>
        </Nav>
        {isAuth ? (
          <Link to="/login">
            <Button variant="outline-info" onClick={logoutUser}>Logout</Button>
          </Link>
        ) : (
          <Link to="/login">
            <Button variant="outline-info">Login</Button>
          </Link>
        )}
      </Navbar>
    </div>
  );
};

export default NavBar;

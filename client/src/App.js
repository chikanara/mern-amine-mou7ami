import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home/Home";
import NavBar from "./components/navBar/NavBar";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Profile from "./components/profile/Profile";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProfile } from "./js/actions/userAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
  
  return (
    <div>
      <Router>
        <NavBar />
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/profile" exact component={Profile} />
      </Router>
    </div>
  );
}

export default App;

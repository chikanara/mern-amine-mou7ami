import { Alert, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../js/actions/userAction";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const loginUser = (e) => {
      e.preventDefault()
      dispatch(login({email,password}))
      
  }
  const isAuth = useSelector(state => state.userReducer.isAuth)
  const loading = useSelector(state => state.userReducer.loading)
  const errors = useSelector(state => state.userReducer.errors)
  return (
    <div className="col-md-7 mx-auto">
        {errors.id === "login" && (
        <Alert className="mt-3 mx-auto" variant="danger">
          {errors.err[0].msg}
        </Alert>
      )}
     {
         loading ? <h1>Loding ...</h1> : isAuth ? <Redirect to="/profile"/>:
         <Form>
         <Form.Group>
           <Form.Label>Email address</Form.Label>
           <Form.Control
             type="email"
             placeholder="Enter email"
             onChange={(e) => setEmail(e.target.value)}
             value={email}
           />
         </Form.Group>
 
         <Form.Group>
           <Form.Label>Password</Form.Label>
           <Form.Control
             type="password"
             placeholder="Password"
             onChange={(e) => setPassword(e.target.value)}
             value={password}
           />
         </Form.Group>
 
         <Button variant="primary" type="submit" onClick={loginUser}>
           Submit
         </Button>
         <Link to="/register">Register here</Link>
       </Form>
     }
    </div>
  );
};

export default Login;

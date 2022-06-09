import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "./../features/users/usersSlice";
import LoginForm from "./../components/forms/LoginForm";

function Login() {
  const user = useSelector(selectUser);
  let navigate = useNavigate();
  if (user) {
    if (user.isAdmin) {
      navigate("/admin");
    } else {
      navigate("/");
    }
  }
  return (
    <>
      <h1>Login</h1>
      <LoginForm />
    </>
  );
}

export default Login;

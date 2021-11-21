import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Authorization } from "../../constants/Authorization";

function Login() {
  const { register, handleSubmit } = useForm();
  const { registerUser } = useContext(Authorization);
  const adminPassword = "qwerty";
  const history = useHistory();
  const [passwordShown, shownPassword] = useState(false);

  const passwordVisiblity = () => {
    shownPassword(passwordShown ? false : true);
  };

  function onSubmit(data) {
    console.log("data", data);
    localStorage.setItem("user", data.name);
    let loginInput = data.loginPassword;

    function strCompare(loginInput, adminPassword) {
      return loginInput === adminPassword;
    }
    if (strCompare(loginInput, adminPassword) === true) {
      alert("Welcome " + data.name);
      registerUser(data.name);
      history.push("/admin/dashboard");
    }
    if (strCompare(loginInput, adminPassword) === false) {
      alert("Invalid password \nTry again or register an account");
    }
    console.log(strCompare(loginInput, adminPassword));
  }

  return (
    <div className="login">
      <Helmet>
        <title>Log In | Holidaze</title>
      </Helmet>
      <div className="login__dark">
        <h3>Not registered?</h3>
        <p>Register your admin account here:</p>
        <Link to={"/register"}>
          <button title="Click to register" className="btn-blue">
            Register
          </button>
        </Link>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>Login</h3>
          <p title="Please enter your login credentials">
            Please enter your login credentials
          </p>
          <input
            title="Please enter your name"
            name="name"
            type="name"
            placeholder="name"
            ref={register}
            required
          />
          <input
            title="Please enter your password"
            name="loginPassword"
            type={passwordShown ? "text" : "password"}
            placeholder="password"
            pattern=".{4,}"
            ref={register}
            required
          />
          <i
            onClick={passwordVisiblity}
            class={passwordShown ? "fas fa-eye" : "fas fa-eye-slash"}
          ></i>
          <button title="Log in" className="btn-blue">
            Log in
          </button>
          <Link to={"/register"}>
            <button title="Click to register" className="register-btn btn-blue">
              Register
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;

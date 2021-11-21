import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Authorization } from "../../constants/Authorization";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Register() {
  const { register, handleSubmit } = useForm();
  const { registerUser, registerEmail } = useContext(Authorization);
  const history = useHistory();
  const [passwordShown, shownPassword] = useState(false);

  const passwordVisiblity = () => {
    shownPassword(passwordShown ? false : true);
  };

  function onSubmit(data) {
    console.log("data", data);
    registerUser(data.name);
    registerEmail(data.email);
    history.push("/admin/establishments");
    alert("Welcome");
  }

  return (
    <div className="register">
      <Helmet>
        <title>Register | Holidaze</title>
      </Helmet>
      <div className="register__dark">
        <h3>Already registered?</h3>
        <p>Go to the login page:</p>
        <Link to={"/login"}>
          <button className="btn-blue">Log In</button>
        </Link>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>Register</h3>
          <p title="Enter your credentials to register an account">
            Enter your credentials to register an account
          </p>
          <input
            name="name"
            type="name"
            placeholder="name"
            ref={register}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="E-mail"
            ref={register}
            required
          />
          <input
            name="password"
            type="password"
            title="Must contain minimum 8 characters, containing one number, one uppercase and one lowercase letter"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            placeholder="password"
            ref={register}
            required
          />
          <i
            onClick={passwordVisiblity}
            class={passwordShown ? "fas fa-eye" : "fas fa-eye-slash"}
          ></i>
          <button className="btn-blue" type="submit">
            Send
          </button>
          <Link to={"/login"}>
            <button type="submit" className="login-btn btn-blue">
              Log in
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Register;

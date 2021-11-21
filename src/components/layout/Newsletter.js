import React from "react";
import Popup from "reactjs-popup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("E-mail is not valid", {
      regex: /^[\d-_.a-zA-z]+@[\d-_.a-zA-z]+\.[a-zA-z]+$/g,
    })
    .required("E-mail is required"),
});

function NewsLetter() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  function onSubmit(data) {
    console.dir("data", data);
    alert("We're enlighted to have you onboard");
  }
  return (
    <Popup
      trigger={
        <div>
          <button
            title="Click to sign up for our newsletter"
            className="btn-blue"
          >
            Sign Up
          </button>
          <button
            title="Click to sign up for our newsletter"
            className="btn-contact"
          >
            <i className="fas fa-newspaper"></i>
          </button>
        </div>
      }
    >
      <div className="pop-up">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Sign Up</h2>
          <h3 title="Submit your e-mail adress to subscribe">
            Submit your e-mail adress to subscribe
          </h3>
          <input
            title="E-mail"
            type="email"
            name="email"
            placeholder="example@domain.com"
            ref={register}
          />
          <p className="error">{errors.email?.message}</p>
          <button className="btn-blue" title="Submit form" type="submit">
            Send
          </button>
        </form>
      </div>
    </Popup>
  );
}

export default NewsLetter;

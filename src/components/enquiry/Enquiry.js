import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/api";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Helmet } from "react-helmet";

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Name is required")
    .matches(/[a-zA-z-\s]/g, "Only characters A-Z are valid")
    .required(),
  email: yup
    .string()
    .email("E-mail is not valid", {
      regex: /^[\d-_.a-zA-z]+@[\d-_.a-zA-z]+\.[a-zA-z]+$/g,
    })
    .required("E-mail is required"),
  checkIn: yup.string().required("Date is required"),
  checkOut: yup.string().required("Date is required"),
});

function Enquiry() {
  const defaultState = {
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
  };

  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const [hotel, setHotel] = useState(defaultState);
  let { id } = useParams();
  const options = { headers };
  const fetchUrl = BASE_URL + "establishments/" + id;

  useEffect(() => {
    fetch(fetchUrl, options)
      .then((response) => response.json())
      .then((json) => setHotel(json))
      .catch((error) => console.debug(error));
  });

  async function onSubmit(data) {
    console.log("data", data);
    const url = BASE_URL + "enquiries";
    const options = {
      headers,
      method: "POST",
      body: JSON.stringify({ ...data, establishmentId: id }),
    };
    await fetch(url, options);
    var con = window.confirm(
      "We thank you for staying at " +
        hotel.name +
        "\nYou can expect an answer within 24 hours"
    );

    if (con === true) {
      localStorage.setItem("enquiry", JSON.stringify(data));
    }
    if (con === false) {
      localStorage.setItem("cancel", "enquiry canceled");
    }
    //window.localStorage.clear();

    history.push("/");
  }

  return (
    <div className="enquiry">
      <Helmet>
        <title>Book {hotel.name} | Holidaze</title>
      </Helmet>
      <div className="enquiry__dark">
        <h3>Book a stay at {hotel.name}</h3>
        <p>Fill out the form to complete your booking</p>
        <Link to={"../accommodations/"}>&#8592; Keep looking</Link>
      </div>
      <div>
        <form className="enquiry-form" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="big-screen">Booking Enquiry</h1>
          <p className="big-screen" title="Please fill out the form">
            Please fill out the form
          </p>
          <h1 className="small-screen">Enquiry</h1>
          <p className="small-screen" title="Please fill out the form">
            Please fill out the form to complete your booking at {hotel.name}
          </p>

          <input
            title="Name"
            placeholder="name"
            type="name"
            name="name"
            ref={register}
          />
          <span className="error">{errors.name?.message}</span>

          <input
            title="E-mail"
            placeholder="e-mail"
            type="email"
            name="email"
            ref={register}
          />
          <span className="error">{errors.email?.message}</span>

          <label htmlFor="checkIn">Check in</label>
          <input
            title="Check in date"
            type="date"
            name="checkIn"
            ref={register}
          />
          <span className="error">{errors.checkIn?.message}</span>

          <label htmlFor="checkOut">Check out</label>
          <input
            title="Check out date"
            type="date"
            name="checkOut"
            ref={register}
          />
          <span className="error">{errors.checkOut?.message}</span>

          <div className="btn-group">
            <button title="Submit form" type="submit" className="btn-blue">
              Submit
            </button>
            <button title="Reset form" type="reset" className="btn-white">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Enquiry;

import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/api";
import { Helmet } from "react-helmet";

function Add() {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  async function onSubmit(data) {
    console.log("data", data);
    const url = BASE_URL + "establishments";
    const options = { headers, method: "POST", body: JSON.stringify(data) };
    await fetch(url, options);
    history.push("/admin/establishments");
  }

  return (
    <div className="add">
      <Helmet>
        <title>Add | Holidaze</title>
      </Helmet>
      <form className="admin-form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h2>Add Establishment</h2>
        </div>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            title="Name"
            name="name"
            type="name"
            placeholder="The Example Inn"
            ref={register}
            required
          />
        </div>
        <div>
          <label htmlFor="email">E-mail: </label>
          <input
            title="E-mail"
            name="email"
            type="email"
            placeholder="example@domain.com"
            ref={register}
            required
          />
        </div>
        <div className="topic-group">
          <label htmlFor="price">Price: </label>
          <input
            title="Price"
            type="number"
            name="price"
            placeholder="00"
            ref={register}
            required
          />
          <label htmlFor="maxGuests">Maximum guests: </label>
          <input
            title="Maximum number of guests"
            type="number"
            name="maxGuests"
            placeholder="00"
            ref={register}
          />
        </div>
        <div>
          <label htmlFor="image">Image URL: </label>
          <input
            title="Image"
            name="image"
            type="url"
            placeholder="https://...."
            ref={register}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input
            title="Description"
            type="text"
            name="description"
            placeholder="full establishment description"
            ref={register}
            required
          />
        </div>
        <div className="topic-group">
          <label htmlFor="lat">Latitude: </label>
          <input
            title="Latitude"
            type="number"
            name="lat"
            placeholder="00.000000"
            ref={register}
          />
          <label htmlFor="lng">Longitude: </label>
          <input
            title="Longitude"
            type="number"
            name="lng"
            placeholder="00.000000"
            ref={register}
          />
        </div>
        <div>
          <label htmlFor="address">Address: </label>
          <input
            title="Address"
            type="address"
            name="address"
            placeholder="streetname, postalcode"
            ref={register}
          />
        </div>
        <div className="btn-group">
          <button className="btn-white" type="reset">
            Reset
          </button>
          <button className="btn-blue" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default Add;

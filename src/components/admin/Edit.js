import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { BASE_URL, headers, PATCH } from "../../constants/api";
import Delete from "./DeleteEstablishment";

function Edit() {
  const defaultState = {
    name: "",
    email: "",
  };

  const history = useHistory();
  const { register, handleSubmit } = useForm();
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
    const updateOptions = {
      headers,
      method: PATCH,
      body: JSON.stringify(data),
    };
    await fetch(fetchUrl, updateOptions);
    history.push("/admin/establishments");
  }

  return (
    <div className="edit">
      <form className="admin-form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h2>Edit establishment</h2>
        </div>

        <div>
          <label htmlFor="name">Name: </label>
          <input
            title="Name"
            type="name"
            name="name"
            defaultValue={hotel.name}
            placeholder="Enter name for the hotel"
            ref={register}
          />
        </div>

        <div>
          <label htmlFor="email">E-mail: </label>
          <input
            title="E-mail"
            type="email"
            name="email"
            defaultValue={hotel.email}
            placeholder="Enter an email address"
            ref={register}
          />
        </div>

        <div className="topic-group">
          <label htmlFor="price">Price: </label>
          <input
            title="Price"
            type="number"
            name="price"
            defaultValue={hotel.price}
            placeholder="00"
            ref={register}
          />
          <label htmlFor="maxGuests">Maximum guests: </label>
          <input
            title="Maximum number of guests"
            type="number"
            name="maxGuests"
            defaultValue={hotel.maxGuests}
            placeholder="00"
            ref={register}
          />
        </div>

        <div>
          <label htmlFor="image">Image URL: </label>
          <input
            title="Image URL"
            type="url"
            name="image"
            defaultValue={hotel.image}
            placeholder="URL"
            ref={register}
          />
        </div>

        <div>
          <label htmlFor="description">Description: </label>
          <input
            title="Description"
            type="text"
            name="description"
            defaultValue={hotel.description}
            placeholder="description"
            ref={register}
          />
        </div>

        <div className="topic-group">
          <label htmlFor="lat">Latitude: </label>
          <input
            title="Latitude"
            type="number"
            name="lat"
            defaultValue={hotel.lat}
            placeholder="00.000000"
            ref={register}
          />
          <label htmlFor="lng">Longitude: </label>
          <input
            title="Longitude"
            type="number"
            name="lng"
            defaultValue={hotel.lng}
            placeholder="00.000000"
            ref={register}
          />
        </div>

        <div>
          <label htmlFor="address">address</label>
          <input
            title="Address"
            type="address"
            name="address"
            defaultValue={hotel.address}
            placeholder="address"
            ref={register}
          />
        </div>

        <div className="btn-group">
          <button title="Reset from" className="btn-white" type="reset">
            Reset
          </button>
          <button
            title="Update establishment"
            className="btn-blue"
            type="submit"
          >
            Update
          </button>
          <Delete id={id} />
        </div>
      </form>
    </div>
  );
}

export default Edit;

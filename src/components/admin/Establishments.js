import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/api";
import { Helmet } from "react-helmet";

function Establishments() {
  const [establishments, setEstablishments] = useState([]);
  const [error, setError] = useState(null);
  const url = BASE_URL + "establishments";

  useEffect(() => {
    const options = { headers };
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        console.dir(json);
        if (json.error) {
          setEstablishments([]);
          setError(json.message);
        } else {
          setEstablishments(json);
        }
      })
      .catch((error) => console.debug(error));
  }, [url]);

  return (
    <div className="accommodations">
      <Helmet>
        <title>Admin | Holidaze</title>
      </Helmet>
      {error && <div className="error">{error}</div>}
      {establishments.map((establishment) => {
        return (
          <div class="accommodations-wrapper" key={establishment.id}>
            <div className="accommodations-tiles">
              <div className="accommodations-links">
                <NavLink
                  title="Edit establishment"
                  to={`edit/${establishment.id}`}
                >
                  <i className="fas fa-edit"></i>
                </NavLink>
                <NavLink
                  title="Establishment details page"
                  to={"../accommodations/" + establishment.id}
                >
                  <i className="fas fa-eye"></i>
                </NavLink>
                <a
                  title="Establishment image"
                  target={"_blank"}
                  rel="noreferrer"
                  href={establishment.image}
                >
                  <i className="fas fa-camera"></i>
                </a>
              </div>
              <div className="accommodations-info">
                <h4>{establishment.name}</h4>
                <p>
                  <b>ID: </b>
                  {establishment.id}
                </p>
                <p>
                  <b>E-mail: </b>
                  {establishment.email}
                </p>
                <p>
                  <b>Price: </b>
                  {establishment.price}
                </p>
                <p>
                  <b>Max-guests: </b>
                  {establishment.maxGuests}
                </p>
                <p>
                  <b>Description: </b>
                  {establishment.description}
                </p>
                <p>
                  <b>Address: </b>
                  {establishment.address}
                </p>
                <p>
                  <b>Location: </b>
                  {establishment.lat}, {establishment.lng}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Establishments;

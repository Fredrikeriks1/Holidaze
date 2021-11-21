import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../constants/api";
import Spinner from "../spinner/Spinner";
import { useParams } from "react-router-dom";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Detail() {
  const [establishment, setEstablishment] = useState(null);
  const [loading, setLoading] = useState(true);
  let { id } = useParams();
  const url = BASE_URL + "establishments/" + id;

  useEffect(() => {
    const options = { headers };
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => setEstablishment(json))
      .catch((error) => console.debug(error))
      .finally(() => setLoading(false));
  });

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="detail-page">
      <Helmet>
        <title>{establishment.name} | Holidaze</title>
      </Helmet>
      <div className="detail-col-1">
        <div>
          <img src={establishment.image} alt={establishment.name} />
        </div>
        <div>
          <h2>{establishment.name}</h2>
          <div className="highlights">
            <p>€ {establishment.price} per night</p>
            <p>Up to {establishment.maxGuests} guests</p>
          </div>
        </div>
      </div>
      <div className="detail-col-2">
        <div>
          <h2>{establishment.name}</h2>
          <a
            target={"_blank"}
            rel="noreferrer"
            href={`https://maps.google.com/maps?q=${establishment.lat},${establishment.lng}&hl=en&z=14&amp;output=embed`}
          >
            <i className="fas fa-map-marker-alt"></i> {establishment.address}
          </a>
          <p>{establishment.description}</p>
          <Link to={"../enquiry/" + id}>
            <button className="btn-white">Book now</button>
          </Link>
        </div>
      </div>
      <div className="detail-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Detail;

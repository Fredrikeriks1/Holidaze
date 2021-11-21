import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/api";

function EnquiryDetail() {
  const defaultState = {
    name: "",
    email: "",
  };

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

  return (
    <div className="enquiry-detail">
      <h4>Contact Information</h4>
      <img src={hotel.image} alt={hotel.id} />
      <p>{hotel.name}</p>
      <p>{hotel.id}</p>
      <a
        title="Send an e-mail to the establishment"
        href={`mailto:${hotel.email}`}
      >
        <i className="fas fa-at"></i> {hotel.email}
      </a>
    </div>
  );
}

export default EnquiryDetail;

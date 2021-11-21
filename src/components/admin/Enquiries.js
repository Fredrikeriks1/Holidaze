import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../constants/api";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import DeleteEnquiry from "./DeleteEnquiry";

function Enquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [error, setError] = useState(null);
  const url = BASE_URL + "enquiries";

  useEffect(() => {
    const options = { headers };
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        console.dir(json);
        if (json.error) {
          setEnquiries([]);
          setError(json.message);
        } else {
          setEnquiries(json);
        }
      })
      .catch((error) => console.debug(error));
  }, [url]);

  return (
    <div className="enquiries">
      <Helmet>
        <title>Enquiries | Holidaze</title>
      </Helmet>
      {error && <div className="error">{error}</div>}
      {enquiries.length === 0 && <p className="empty">Zero enquiries</p>}
      {enquiries.map((enquiry) => {
        const format = { year: "numeric", month: "short", day: "numeric" };
        const checkIn = new Date(enquiry.checkIn);
        const checkOut = new Date(enquiry.checkOut);
        const createdAt = new Date(enquiry.createdAt);
        const newFormat = new Intl.DateTimeFormat("en-GB", format);
        const newCheckIn = newFormat.format(checkIn);
        const newCheckOut = newFormat.format(checkOut);
        const newCreatedAt = newFormat.format(createdAt);

        return (
          <div className="enquiries-cards" key={enquiry.id}>
            <NavLink
              target="_blank"
              to={`enquirydetail/${enquiry.establishmentId}`}
            >
              <i className="fas fa-address-card"></i>
            </NavLink>
            <div>
              <p>Sent: {newCreatedAt}</p>
              <p>From: {enquiry.email}</p>
              <p>Check in: {newCheckIn}</p>
              <p>Check out: {newCheckOut}</p>
              <DeleteEnquiry id={enquiry.id} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Enquiries;

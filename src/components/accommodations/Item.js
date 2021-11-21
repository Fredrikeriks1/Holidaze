import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Item({ id, name, image, price, maxGuests, description, address }) {
  return (
    <div className="cards" key={id}>
      <div className="cards__img">
        <img src={image} alt={name} />
      </div>
      <div className="cards__txt">
        <h3>{name}</h3>
        <p>
          <i className="fas fa-map-marker-alt"></i> {address}
        </p>
        <p>{description}</p>
        <div className="highlights">
          <p>€ {price} per night</p>
          <p>Up to {maxGuests} guests</p>
        </div>
        <Link to={"accommodations/" + id}>
          <button className="btn-white btn__book">Book Now</button>
          <button className="btn-white btn__learn">Learn More</button>
        </Link>
      </div>
    </div>
  );
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  maxGuests: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Item;

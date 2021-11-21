import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../constants/api";
import Item from "../accommodations/Item";
import Spinner from "../spinner/Spinner";

function RecentlyViewed() {
  const [establishments, setEstablishments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = BASE_URL + "establishments";
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };

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
      .catch((error) => console.debug(error))
      .finally(() => setLoading(false));
  }, [url]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="recently-veiwed-container">
      <h2>Previously browsed accommodations</h2>
      <div
        className={
          isActive ? "recently-veiwed default" : "recently-veiwed more"
        }
      >
        {error && <div className="error">{error}</div>}
        {establishments.map((establishment) => {
          const { id, name, image, price, maxGuests, description, address } =
            establishment;
          return (
            <Item
              key={id}
              id={id}
              name={name}
              image={image}
              price={price}
              maxGuests={maxGuests}
              description={description}
              address={address}
            />
          );
        })}
      </div>
      <button
        className={isActive ? "btn-default" : "btn-more"}
        onClick={handleToggle}
      >
        View more <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default RecentlyViewed;

import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../constants/api";
import Item from "../accommodations/Item";
import Search from "./Search";
import { NavLink } from "react-router-dom";

function SearchList() {
  const [error, setError] = useState(null);
  const url = BASE_URL + "establishments";
  const [accommodations, setEstablishments] = useState([]);
  const [filteredEstablishments, setFilteredEstablishments] = useState([]);

  useEffect(() => {
    const options = { headers };
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        console.dir(json);
        if (json.error) {
          setEstablishments([]);
          setFilteredEstablishments(json.results);
          setError(json.message);
        } else {
          setEstablishments(json);
        }
      })
      .catch((error) => console.debug(error));
  }, [url]);

  const filterCards = function (f) {
    const searchValue = f.target.value.toLowerCase(); // lowercase
    const filteredArray = accommodations.filter(function (h) {
      const lowerCaseName = h.name.toLowerCase(); // lowercase
      if (lowerCaseName.includes(searchValue)) {
        return true;
      } // check if the name matches the search value
      return false;
    });
    setFilteredEstablishments(filteredArray);
  };

  return (
    <>
      <Search handleSearch={filterCards} />
      <div className="search-results">
        {error && <div className="error">{error}</div>}
        {filteredEstablishments.map((establishments) => {
          const { id, name, image, price, maxGuests, description, address } =
            establishments;
          return (
            <>
              <NavLink to={"/home"} title="Close" className="btn__close">
                <i className="fas fa-times"></i>
              </NavLink>
              <div>
                <Item
                  id={id}
                  name={name}
                  image={image}
                  price={price}
                  maxGuests={maxGuests}
                  description={description}
                  address={address}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default SearchList;

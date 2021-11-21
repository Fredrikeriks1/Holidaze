import React from "react";
import PropTypes from "prop-types";

function Search({ handleSearch }) {
  return (
    <div className="search-bar">
      <input
        title="Search for accommodations"
        placeholder="Search...                       
			&#xF002;"
        onChange={(event) => handleSearch(event)}
      />
    </div>
  );
}

Search.propTypes = { handleSearch: PropTypes.func.isRequired };

export default Search;

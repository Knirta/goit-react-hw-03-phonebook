import React from "react";
import PropTypes from "prop-types";
import "./Filter.scss";

const Filter = ({ filter, handleFilter }) => {
  return (
    <label>
      <p className="Filter__title">Find contacts by name</p>
      <input
        className="Filter__input"
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilter}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default Filter;

import React from "react";
import PropTypes from "prop-types";

export const Input = ({ handleAddPerson }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddPerson(event);
    event.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="addPerson">
        name
        <input type="string" id="name" placeholder="name" />
      </label>
      <label>
        job
        <input type="string" id="job" placeholder="job" />
      </label>
      <button>click here</button>
    </form>
  );
};

PropTypes.Input = {
  handleSubmit: PropTypes.func,
  handleAddPerson: PropTypes.func,
};

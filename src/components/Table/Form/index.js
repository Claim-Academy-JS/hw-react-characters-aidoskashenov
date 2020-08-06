import React from "react";
import PropTypes from "prop-types";

export const Form = ({ people }) => {




  return people.map((person, i) => (
    <div key={i}>
      <p>
        {" "}
        {person.name}<br/>
        {person.job}
      </p>

    </div>
  ));
};


Form.propTypes = {
  people: PropTypes.array,
  name: PropTypes.string,
  job: PropTypes.string,
};
